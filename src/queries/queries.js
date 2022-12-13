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

const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!, $passwordConfirmation: String!) {
    createUser(
      input: {
        name: $name
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) 
    {
      user {
        id
        name
        email
      }
      errors
    }
  }
`;

const CREATE_SESSION_QUERY = gql`
  query CreateSession($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
        confirm
        user {
            id
            name
            email
        }
    }
  }
`;

const TRIPS_QUERY = gql`
  {
    trips {
      id
      name
      destinationPlaceId
      destinationName
      startTime
      attendance
      hostId
      maxAttendees
    }
  }
`;

const USER_TRIPS_QUERY = gql`
  {
    trip(id: 5) {
      id
      name
      destinationPlaceId
      destinationName
      startTime
      attendance
      hostId
      maxAttendees
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

const DELETE_TRIP_MUTATION = gql`
  mutation DeleteTrip($id: ID!) {
    deleteTrip(input: { id: $id }) {
      confirm
      errors
    }
  }
`;

const MUSEUMS_QUERY = gql`
  query Museums($city: String!, $state: String!, $zipcode: String!) {
    museums(city: $city, state: $state, zipcode: $zipcode) {
      placeId
      name
      rating
      latitude
      longitude
      imageUrl
      imageDescription
    }
  }
`;

const MUSEUM_QUERY = gql`
  query Museum($placeId: String!) {
    museum(placeId: $placeId) {
      placeId
      name
      rating
      latitude
      longitude
      price
      website
      address
      totalRatings
      separatedHoo
      combinedHoo
      wheelchairAccessibleEntrance
      imageUrl
      imageDescription
    }
  }
`;

export {
  USERS_QUERY,
  USER_QUERY,
  CREATE_USER_MUTATION,
  CREATE_SESSION_QUERY,
  TRIPS_QUERY,
  USER_TRIPS_QUERY,
  CREATE_TRIP_MUTATION,
  CREATE_USER_TRIP_MUTATION,
  DELETE_USER_TRIP_MUTATION,
  DELETE_TRIP_MUTATION,
  MUSEUMS_QUERY,
  MUSEUM_QUERY,
};
