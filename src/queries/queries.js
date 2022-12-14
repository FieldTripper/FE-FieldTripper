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
  query UserTrips($userId: Int!) {
    trips(userId: $userId) {
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
  CREATE_SESSION_QUERY,
  TRIPS_QUERY,
  USER_TRIPS_QUERY,
  MUSEUMS_QUERY,
  MUSEUM_QUERY,
};
