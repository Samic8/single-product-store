import AWS from 'aws-sdk'; 
import bluebird from 'bluebird'
const uuidv1 = require('uuid/v1');

AWS.config.setPromisesDependency(bluebird);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const createUserId = () => `usr-${uuidv1()}`

export const resolvers = {
  Query: {
    ok: () => "ok",
    list: async () => {
      var params = {
          TableName: process.env.USER_TABLE,
          ProjectionExpression: "id, fName, lName, email"
      };
      const data = await dynamoDb.scan(params).promise();
      return Object.values(data.Items.reduce((acc, current) => {
        if(!acc[current.id]) {
          acc[current.id] = current;
          return acc;
        } 
        acc[current.id] = {
          ...acc[current.id],
          ...current,
        };
        return acc;
      },{}))
    },
  },
  Mutation: {
    addUser : async (parent, {email, fName = '', lName = '', color ='a'}) => {
      const id = createUserId();
      const timestamp = new Date().getTime();
      const userDetail = {
        id,
        info: 'userDetail',
        submittedAt: timestamp,
        updatedAt: timestamp,
        email,
        fName,
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
        fName,
        lName,
        configuration: {
          color,
        }
      };
    }
  }
};

