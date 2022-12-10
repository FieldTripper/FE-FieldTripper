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
  mutation {
    createTrip(
      input: {
        name: "Denver Arts Museum Trip"
        destinationName: "Denver Art Museum"
        destinationPlaceId: "siuhg983shdgfi"
        startTime: "Tuesday January 24, 2022 10:00 AM"
      }
    ) {
      trip {
        name
        destinationName
        destinationPlaceId
        startTime
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
