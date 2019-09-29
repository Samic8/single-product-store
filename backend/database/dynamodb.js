import AWS from 'aws-sdk'; 
import bluebird from 'bluebird'

AWS.config.setPromisesDependency(bluebird);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const queryIndex = async (email) => {
  const getIdFromEmail = { 
    TableName: process.env.USER_TABLE,
    IndexName: process.env.EMAIL_INDEX,
    KeyConditionExpression: 'email = :email_id',
    ExpressionAttributeValues: { ':email_id': email} 
  }
  
  return dynamoDb.query(getIdFromEmail).promise();
}

export const put = async (item) => {
  return dynamoDb.put({
    TableName: process.env.USER_TABLE,
    Item: item,
  }).promise();
}