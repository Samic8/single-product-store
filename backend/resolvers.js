import AWS from 'aws-sdk'; 
import bluebird from 'bluebird'

import {UpdateUserConfig} from './resolvers/mutations'

AWS.config.setPromisesDependency(bluebird);
const dynamoDb = new AWS.DynamoDB.DocumentClient();


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
    UpdateUserConfig,
  }
};

