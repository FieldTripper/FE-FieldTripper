import { gql } from "@apollo/client";

const USERS_QUERY = gql`
{
  users {
    id
    name
    email
  }
}
`;

export { 
  USERS_QUERY 
};