import uuidV1 from 'uuid/v1';

import * as dynamo from './dynamodb';

const createUserId = () => `usr-${uuidV1()}`

export const getUserFromEmail = async email => {
  const {Items: [userInfo]} = await dynamo.queryIndex(email);
  return userInfo;
}

export const createUser = (details, config) => {
  const id = createUserId();
  const submittedAt = new Date().getTime();
  updateUserConfig(id, config, submittedAt)
  return updateUserDetails(id, details, submittedAt)
}

export const updateUserConfig = (id, config, maybeOverrideSubmittedAt) => {
  const {
    storeName,
    productName,
    type,
    price,
    description,
    header,
    background,
    productContainer,
  } = config;
  
  const timestamp = new Date().getTime();
  const userConfig = {
    id,
    info: 'userConfig',
    updatedAt: timestamp,
    storeName,
    productName,
    type,
    price,
    description,
    header,
    background,
    productContainer,
  };

  if(maybeOverrideSubmittedAt) {
    userConfig.submittedAt = maybeOverrideSubmittedAt;
  }
  return dynamo.put(userConfig);
}

const updateUserDetails = (id, details, maybeOverrideSubmittedAt) => {
  const {email} = details;
  const timestamp = new Date().getTime();
  const userDetail = {
    id,
    info: 'userDetail',
    updatedAt: timestamp,
    email,
  };
  if(maybeOverrideSubmittedAt) {
    userDetail.submittedAt = maybeOverrideSubmittedAt
  }
  return dynamo.put(userDetail);
}