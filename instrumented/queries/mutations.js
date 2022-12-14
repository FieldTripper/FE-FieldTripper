function cov_porlosfft() {
  var path = "/Users/Andrew/turing/mod4/project/FE-FieldTripper/src/queries/mutations.js";
  var hash = "eb01e31c358c4d4d14baa98da98184e22e9bda04";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Andrew/turing/mod4/project/FE-FieldTripper/src/queries/mutations.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 29
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "1": {
        start: {
          line: 28,
          column: 34
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "2": {
        start: {
          line: 45,
          column: 34
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "3": {
        start: {
          line: 59,
          column: 29
        },
        end: {
          line: 90,
          column: 1
        }
      },
      "4": {
        start: {
          line: 92,
          column: 29
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
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "eb01e31c358c4d4d14baa98da98184e22e9bda04"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_porlosfft = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_porlosfft();
import { gql } from "@apollo/client";
const CREATE_USER_MUTATION = (cov_porlosfft().s[0]++, gql`
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
`);
const CREATE_USER_TRIP_MUTATION = (cov_porlosfft().s[1]++, gql`
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
`);
const DELETE_USER_TRIP_MUTATION = (cov_porlosfft().s[2]++, gql`
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
`);
const CREATE_TRIP_MUTATION = (cov_porlosfft().s[3]++, gql`
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
`);
const DELETE_TRIP_MUTATION = (cov_porlosfft().s[4]++, gql`
  mutation DeleteTrip($id: ID!) {
    deleteTrip(input: { id: $id }) {
      confirm
      errors
    }
  }
`);
export { CREATE_USER_MUTATION, CREATE_USER_TRIP_MUTATION, DELETE_USER_TRIP_MUTATION, CREATE_TRIP_MUTATION, DELETE_TRIP_MUTATION };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJDUkVBVEVfVVNFUl9NVVRBVElPTiIsIkNSRUFURV9VU0VSX1RSSVBfTVVUQVRJT04iLCJERUxFVEVfVVNFUl9UUklQX01VVEFUSU9OIiwiQ1JFQVRFX1RSSVBfTVVUQVRJT04iLCJERUxFVEVfVFJJUF9NVVRBVElPTiJdLCJzb3VyY2VzIjpbIm11dGF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgQ1JFQVRFX1VTRVJfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIENyZWF0ZVVzZXIoXG4gICAgJG5hbWU6IFN0cmluZyFcbiAgICAkZW1haWw6IFN0cmluZyFcbiAgICAkcGFzc3dvcmQ6IFN0cmluZyFcbiAgICAkcGFzc3dvcmRDb25maXJtYXRpb246IFN0cmluZyFcbiAgKSB7XG4gICAgY3JlYXRlVXNlcihcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG5hbWU6ICRuYW1lXG4gICAgICAgIGVtYWlsOiAkZW1haWxcbiAgICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxuICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogJHBhc3N3b3JkQ29uZmlybWF0aW9uXG4gICAgICB9XG4gICAgKSB7XG4gICAgICB1c2VyIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBlbWFpbFxuICAgICAgfVxuICAgICAgZXJyb3JzXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDUkVBVEVfVVNFUl9UUklQX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBDcmVhdGVVc2VyVHJpcCgkdXNlcklkOiBJRCEsICR0cmlwSWQ6IElEISwgJGlzSG9zdDogQm9vbGVhbiEpIHtcbiAgICBjcmVhdGVVc2VyVHJpcChcbiAgICAgIGlucHV0OiB7IHVzZXJJZDogJHVzZXJJZCwgdHJpcElkOiAkdHJpcElkLCBpc0hvc3Q6ICRpc0hvc3QgfVxuICAgICkge1xuICAgICAgdXNlclRyaXAge1xuICAgICAgICB1c2VySWRcbiAgICAgICAgdHJpcElkXG4gICAgICAgIHVzZXIge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBlbWFpbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBERUxFVEVfVVNFUl9UUklQX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBEZWxldGVVc2VyVHJpcCgkdXNlcklkOiBJRCEsICR0cmlwSWQ6IElEISkge1xuICAgIGRlbGV0ZVVzZXJUcmlwKFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgdXNlcklkOiAkdXNlcklkXG4gICAgICAgIHRyaXBJZDogJHRyaXBJZFxuICAgICAgfVxuICAgICkgXG4gICAgICB7XG4gICAgICAgIGNvbmZpcm1cbiAgICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQ1JFQVRFX1RSSVBfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIENyZWF0ZVRyaXAoXG4gICAgJHVzZXJJZDogSUQhXG4gICAgJG5hbWU6IFN0cmluZyFcbiAgICAkZGVzdGluYXRpb25OYW1lOiBTdHJpbmchXG4gICAgJGRlc3RpbmF0aW9uUGxhY2VJZDogU3RyaW5nIVxuICAgICRzdGFydERhdGU6IFN0cmluZyFcbiAgICAkc3RhcnRUaW1lOiBTdHJpbmchXG4gICAgJG1heEF0dGVuZGVlczogSW50IVxuICApIHtcbiAgICBjcmVhdGVUcmlwKFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgdXNlcklkOiAkdXNlcklkXG4gICAgICAgIG5hbWU6ICRuYW1lXG4gICAgICAgIGRlc3RpbmF0aW9uTmFtZTogJGRlc3RpbmF0aW9uTmFtZVxuICAgICAgICBkZXN0aW5hdGlvblBsYWNlSWQ6ICRkZXN0aW5hdGlvblBsYWNlSWRcbiAgICAgICAgc3RhcnREYXRlOiAkc3RhcnREYXRlXG4gICAgICAgIHN0YXJ0VGltZTogJHN0YXJ0VGltZVxuICAgICAgICBtYXhBdHRlbmRlZXM6ICRtYXhBdHRlbmRlZXNcbiAgICAgIH1cbiAgICApIHtcbiAgICAgIHRyaXAge1xuICAgICAgICBuYW1lXG4gICAgICAgIGRlc3RpbmF0aW9uTmFtZVxuICAgICAgICBkZXN0aW5hdGlvblBsYWNlSWRcbiAgICAgICAgc3RhcnRUaW1lXG4gICAgICAgIG1heEF0dGVuZGVlc1xuICAgICAgfVxuICAgICAgZXJyb3JzXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBERUxFVEVfVFJJUF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gRGVsZXRlVHJpcCgkaWQ6IElEISkge1xuICAgIGRlbGV0ZVRyaXAoaW5wdXQ6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBjb25maXJtXG4gICAgICBlcnJvcnNcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCB7XG4gIENSRUFURV9VU0VSX01VVEFUSU9OLFxuICBDUkVBVEVfVVNFUl9UUklQX01VVEFUSU9OLFxuICBERUxFVEVfVVNFUl9UUklQX01VVEFUSU9OLFxuICBDUkVBVEVfVFJJUF9NVVRBVElPTixcbiAgREVMRVRFX1RSSVBfTVVUQVRJT04sXG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxHQUFHLFFBQVEsZ0JBQWdCO0FBRXBDLE1BQU1DLG9CQUFvQiw0QkFBR0QsR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFRCxNQUFNRSx5QkFBeUIsNEJBQUdGLEdBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFRCxNQUFNRyx5QkFBeUIsNEJBQUdILEdBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFRCxNQUFNSSxvQkFBb0IsNEJBQUdKLEdBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUVELE1BQU1LLG9CQUFvQiw0QkFBR0wsR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsU0FDRUMsb0JBQW9CLEVBQ3BCQyx5QkFBeUIsRUFDekJDLHlCQUF5QixFQUN6QkMsb0JBQW9CLEVBQ3BCQyxvQkFBb0IifQ==