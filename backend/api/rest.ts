import uuidV1 from 'uuid/v1';
import AWS from 'aws-sdk'; 
import bluebird from 'bluebird'

AWS.config.setPromisesDependency(bluebird);

const dynamoDb = new AWS.DynamoDB.DocumentClient();
// dynamoDb.update()

const createUserId = () => `usr-${uuidV1()}`

const submit = (event, context, callback) => {
  const {email, name, lName, color} = JSON.parse(event.body);

  if (typeof email !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t submit user because of validation errors.'));
    return;
  }
  const {details, config} = userInfo(email, name, lName, color)
  Promise.all(submitUser(details, config))
    .then(res => {
      console.log(res)
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Successfully submitted user with email ${email}`,
          userId: details.id
        })
      });
    })
    .catch(err => {
      console.log(err);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: `Unable to submit user with email ${email}`
        })
      })
    });
};

const submitUser = (details, config) => {
  console.log('Submitting user');
  const userDetails = {
    TableName: process.env.USER_TABLE,
    Item: details,
  };
  const userConfig = {
    TableName: process.env.USER_TABLE,
    Item: config,
  };
  const detailsPromise = dynamoDb.put(userDetails).promise()
  const configPromise = dynamoDb.put(userConfig).promise()
  return [detailsPromise, configPromise];
    // .then(res => details);
};

const userInfo = (email, name, lName, color) => {
  const timestamp = new Date().getTime();
  const id = createUserId();
  return {
    details: {
      id,
      info: 'userDetail',
      email,
      name,
      lName,
      submittedAt: timestamp,
      updatedAt: timestamp,
    },
    config: {
      id,
      info: 'userConfig',
      color,
      updatedAt: timestamp,
    }
  }
};

const getUser = (event, context, callback) => {
  const params = {
    TableName: process.env.USER_TABLE,
    Key: {
      id: event.pathParameters.id,
      info: 'userDetail',
    },
  };

  const detailsPromise = dynamoDb.get(params).promise()
  params.Key.info = 'userConfig';
  const configPromise = dynamoDb.get(params).promise()
  Promise.all([detailsPromise, configPromise])
    .then(result => {
      console.log(result)
      const {info, id, submittedAt, updatedAt, ...body} = {
        ...result[0].Item,
        ...result[1].Item,
      }
      const response = {
        statusCode: 200,
        body: JSON.stringify(body),
      };
      callback(null, response);
    })
    .catch(error => {
      console.error(error);
      callback(new Error('Couldn\'t fetch user.'));
      return;
    });
};

const objectToUpdateAttributes = (fieldsToUpdate) => {
  return Object.entries(fieldsToUpdate).reduce((acc, [key, value], index) => {
    acc.ExpressionAttributeNames[`#${key}`] = key;
    acc.ExpressionAttributeValues[`:${key}`] = value;
    const maybeComma = index === 0 ? '' : ','
    acc.UpdateExpression += `${maybeComma} #${key} = :${key}`;
    return acc;
  },{ExpressionAttributeNames:{},ExpressionAttributeValues:{},UpdateExpression: 'Set'});
}

const updateConfig = (event, context, callback) => {
  const updateAttributes = objectToUpdateAttributes(JSON.parse(event.body));

  var params = {
    TableName: process.env.USER_TABLE,
    Key: {
      id: event.pathParameters.id,
      info: 'userConfig',
    },
    ReturnValues: "ALL_NEW", 
    ...updateAttributes,
  };

  dynamoDb.update(params).promise()
    .then(result => {
      const response = {
        statusCode: 200,
        body: JSON.stringify(result),
      };
      callback(null, response);
    })
    .catch(error => {
      console.error(error);
      callback(new Error('Couldn\'t update user.'));
      return;
    });
}

export { submit, getUser, updateConfig }