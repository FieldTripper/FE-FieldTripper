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

const TRIPS_QUERY = gql`
  {
    trips {
      id
      name
      destinationPlaceId
      destinationName
      startTime
    }
  }
`;

const CREATE_TRIP_MUTATION = gql`
  mutation CreateTrip(
    $name: String!
    $destinationName: String!
    $destinationPlaceId: String!
    $startTime: String!
    $maxAttendees: Int!
  ) {
    createTrip(
      input: {
        name: $name
        destinationName: $destinationName
        destinationPlaceId: $destinationPlaceId
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
  TRIPS_QUERY,
  CREATE_TRIP_MUTATION,
  CREATE_USER_TRIP_MUTATION,
  DELETE_TRIP_MUTATION,
  MUSEUMS_QUERY,
  MUSEUM_QUERY,
};
