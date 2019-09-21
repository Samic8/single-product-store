import AWS from 'aws-sdk'; 
import bluebird from 'bluebird'
const uuidv1 = require('uuid/v1');

AWS.config.setPromisesDependency(bluebird);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const createUserId = () => `usr-${uuidv1()}`

export const resolvers = {
  Query: {
    hello: () => "world",
    list: async () => {
      var params = {
          TableName: process.env.USER_TABLE,
          ProjectionExpression: "id, fullname, email"
      };
      const data = await dynamoDb.scan(params).promise();
      return data.Items.map(({email}) => email)
    },
  },
  Mutation: {
    addUser : async (parent, {email, name = '', lName = '', color ='a'}) => {
      const id = createUserId();
      const timestamp = new Date().getTime();
      console.log(email, name, lName, color)
      const userDetail = {
        id,
        info: 'userDetail',
        submittedAt: timestamp,
        updatedAt: timestamp,
        email,
        name,
        lName,
      };
      const userConfig = {
        id,
        info: 'userConfig',
        submittedAt: timestamp,
        updatedAt: timestamp,
        color: color
      };

      const detailPromise = dynamoDb.put({
        TableName: process.env.USER_TABLE,
        Item: userDetail,
      }).promise();
      const configPromise = dynamoDb.put({
        TableName: process.env.USER_TABLE,
        Item: userConfig,
      }).promise();

      await detailPromise;
      await configPromise;
      return {
        id,
        email,
        name,
        lName,
        configuration: {
          color,
        }
      };
    }
  }
};

