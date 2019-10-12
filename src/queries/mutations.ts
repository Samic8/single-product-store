import { gql } from "apollo-boost";

export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($email: String!, $config: Config!) {
    UpdateUserConfig(email: $email, config: $config)
  }
`;