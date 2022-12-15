function cov_2c8zrgkpov() {
  var path = "/Users/dinnekopelevich/turing/mod_4_projects/FE-FieldTripper/src/queries/queries.js";
  var hash = "593517ba19eee333849fc55d30dcb7c6e35d8f59";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dinnekopelevich/turing/mod_4_projects/FE-FieldTripper/src/queries/queries.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 19
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 23,
          column: 29
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "3": {
        start: {
          line: 36,
          column: 20
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "4": {
        start: {
          line: 51,
          column: 25
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "5": {
        start: {
          line: 66,
          column: 22
        },
        end: {
          line: 78,
          column: 1
        }
      },
      "6": {
        start: {
          line: 80,
          column: 21
        },
        end: {
          line: 99,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "593517ba19eee333849fc55d30dcb7c6e35d8f59"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2c8zrgkpov = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2c8zrgkpov();
import { gql } from "@apollo/client";
const USERS_QUERY = (cov_2c8zrgkpov().s[0]++, gql`
  {
    users {
      id
      name
      email
    }
  }
`);
const USER_QUERY = (cov_2c8zrgkpov().s[1]++, gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`);
const CREATE_SESSION_QUERY = (cov_2c8zrgkpov().s[2]++, gql`
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
`);
const TRIPS_QUERY = (cov_2c8zrgkpov().s[3]++, gql`
  query Trips($userId: Int!, $tripException: String!) {
    trips(userId: $userId, tripException: $tripException) {
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
`);
const USER_TRIPS_QUERY = (cov_2c8zrgkpov().s[4]++, gql`
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
`);
const MUSEUMS_QUERY = (cov_2c8zrgkpov().s[5]++, gql`
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
`);
const MUSEUM_QUERY = (cov_2c8zrgkpov().s[6]++, gql`
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
`);
export { USERS_QUERY, USER_QUERY, CREATE_SESSION_QUERY, TRIPS_QUERY, USER_TRIPS_QUERY, MUSEUMS_QUERY, MUSEUM_QUERY };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJVU0VSU19RVUVSWSIsIlVTRVJfUVVFUlkiLCJDUkVBVEVfU0VTU0lPTl9RVUVSWSIsIlRSSVBTX1FVRVJZIiwiVVNFUl9UUklQU19RVUVSWSIsIk1VU0VVTVNfUVVFUlkiLCJNVVNFVU1fUVVFUlkiXSwic291cmNlcyI6WyJxdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBVU0VSU19RVUVSWSA9IGdxbGBcbiAge1xuICAgIHVzZXJzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBlbWFpbFxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVVNFUl9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgVXNlcigkaWQ6IElEISkge1xuICAgIHVzZXIoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGVtYWlsXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDUkVBVEVfU0VTU0lPTl9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgQ3JlYXRlU2Vzc2lvbigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICAgIGNyZWF0ZVNlc3Npb24oZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgICAgY29uZmlybVxuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZW1haWxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRSSVBTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBUcmlwcygkdXNlcklkOiBJbnQhLCAkdHJpcEV4Y2VwdGlvbjogU3RyaW5nISkge1xuICAgIHRyaXBzKHVzZXJJZDogJHVzZXJJZCwgdHJpcEV4Y2VwdGlvbjogJHRyaXBFeGNlcHRpb24pIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkZXN0aW5hdGlvblBsYWNlSWRcbiAgICAgIGRlc3RpbmF0aW9uTmFtZVxuICAgICAgc3RhcnRUaW1lXG4gICAgICBhdHRlbmRhbmNlXG4gICAgICBob3N0SWRcbiAgICAgIG1heEF0dGVuZGVlc1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVVNFUl9UUklQU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgVXNlclRyaXBzKCR1c2VySWQ6IEludCEpIHtcbiAgICB0cmlwcyh1c2VySWQ6ICR1c2VySWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkZXN0aW5hdGlvblBsYWNlSWRcbiAgICAgIGRlc3RpbmF0aW9uTmFtZVxuICAgICAgc3RhcnRUaW1lXG4gICAgICBhdHRlbmRhbmNlXG4gICAgICBob3N0SWRcbiAgICAgIG1heEF0dGVuZGVlc1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTVVTRVVNU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgTXVzZXVtcygkY2l0eTogU3RyaW5nISwgJHN0YXRlOiBTdHJpbmchLCAkemlwY29kZTogU3RyaW5nISkge1xuICAgIG11c2V1bXMoY2l0eTogJGNpdHksIHN0YXRlOiAkc3RhdGUsIHppcGNvZGU6ICR6aXBjb2RlKSB7XG4gICAgICBwbGFjZUlkXG4gICAgICBuYW1lXG4gICAgICByYXRpbmdcbiAgICAgIGxhdGl0dWRlXG4gICAgICBsb25naXR1ZGVcbiAgICAgIGltYWdlVXJsXG4gICAgICBpbWFnZURlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBNVVNFVU1fUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IE11c2V1bSgkcGxhY2VJZDogU3RyaW5nISkge1xuICAgIG11c2V1bShwbGFjZUlkOiAkcGxhY2VJZCkge1xuICAgICAgcGxhY2VJZFxuICAgICAgbmFtZVxuICAgICAgcmF0aW5nXG4gICAgICBsYXRpdHVkZVxuICAgICAgbG9uZ2l0dWRlXG4gICAgICBwcmljZVxuICAgICAgd2Vic2l0ZVxuICAgICAgYWRkcmVzc1xuICAgICAgdG90YWxSYXRpbmdzXG4gICAgICBzZXBhcmF0ZWRIb29cbiAgICAgIGNvbWJpbmVkSG9vXG4gICAgICB3aGVlbGNoYWlyQWNjZXNzaWJsZUVudHJhbmNlXG4gICAgICBpbWFnZVVybFxuICAgICAgaW1hZ2VEZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IHtcbiAgVVNFUlNfUVVFUlksXG4gIFVTRVJfUVVFUlksXG4gIENSRUFURV9TRVNTSU9OX1FVRVJZLFxuICBUUklQU19RVUVSWSxcbiAgVVNFUl9UUklQU19RVUVSWSxcbiAgTVVTRVVNU19RVUVSWSxcbiAgTVVTRVVNX1FVRVJZLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosU0FBU0EsR0FBRyxRQUFRLGdCQUFnQjtBQUVwQyxNQUFNQyxXQUFXLDZCQUFHRCxHQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1FLFVBQVUsNkJBQUdGLEdBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTUcsb0JBQW9CLDZCQUFHSCxHQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1JLFdBQVcsNkJBQUdKLEdBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1LLGdCQUFnQiw2QkFBR0wsR0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTU0sYUFBYSw2QkFBR04sR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1PLFlBQVksNkJBQUdQLEdBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELFNBQ0VDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxvQkFBb0IsRUFDcEJDLFdBQVcsRUFDWEMsZ0JBQWdCLEVBQ2hCQyxhQUFhLEVBQ2JDLFlBQVkifQ==