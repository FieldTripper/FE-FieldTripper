import { gql } from "@apollo/client";

const USER_QUERY = gql`
  query User($id: Integer!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

export { 
  USER_QUERY 
};