import { gql } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    createUser(
      input: {
        name: $name
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      user {
        id
        name
        email
      }
      errors
    }
  }
`;

const CREATE_USER_TRIP_MUTATION = gql`
  mutation CreateUserTrip($userId: ID!, $tripId: ID!, $isHost: Boolean!) {
    createUserTrip(
      input: { userId: $userId, tripId: $tripId, isHost: $isHost }
    ) {
      userTrip {
        userId
        tripId
        user {
          name
          email
        }
      }
    }
  }
`;

const DELETE_USER_TRIP_MUTATION = gql`
  mutation DeleteUserTrip($userId: ID!, $tripId: ID!) {
    deleteUserTrip(
      input: {
        userId: $userId
        tripId: $tripId
      }
    ) 
      {
        confirm
      }
  }
`;

const CREATE_TRIP_MUTATION = gql`
  mutation CreateTrip(
    $userId: ID!
    $name: String!
    $destinationName: String!
    $destinationPlaceId: String!
    $startDate: String!
    $startTime: String!
    $maxAttendees: Int!
  ) {
    createTrip(
      input: {
        userId: $userId
        name: $name
        destinationName: $destinationName
        destinationPlaceId: $destinationPlaceId
        startDate: $startDate
        startTime: $startTime
        maxAttendees: $maxAttendees
      }
    ) {
      trip {
        name
        destinationName
        destinationPlaceId
        startTime
        maxAttendees
      }
      errors
    }
  }
`;

const DELETE_TRIP_MUTATION = gql`
  mutation DeleteTrip($id: ID!) {
    deleteTrip(input: { id: $id }) {
      confirm
      errors
    }
  }
`;

export {
  CREATE_USER_MUTATION,
  CREATE_USER_TRIP_MUTATION,
  DELETE_USER_TRIP_MUTATION,
  CREATE_TRIP_MUTATION,
  DELETE_TRIP_MUTATION,
};