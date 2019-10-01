import { getUserFromEmail, createUser, updateUserConfig } from '../database/database';

export const UpdateUserConfig = async (parent, {email, config = {}}) => {
  const user = await getUserFromEmail(email);
  const isNewUser = !(user && user.id)

  let userPromise
  if(isNewUser) {
    userPromise = createUser({email}, config);
  } else {
    userPromise = updateUserConfig(user.id, config);
  }

  userPromise.catch(err => {
    console.error(err);
    return err;
  })

  await userPromise;
  return 'ok';
};