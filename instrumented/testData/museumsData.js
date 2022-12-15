function cov_1wri9nzyva() {
  var path = "/Users/dinnekopelevich/turing/mod_4_projects/FE-FieldTripper/src/testData/museumsData.js";
  var hash = "c4192b74cd2f0e4801aec9c5c8464a46a0d466e0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dinnekopelevich/turing/mod_4_projects/FE-FieldTripper/src/testData/museumsData.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 36,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c4192b74cd2f0e4801aec9c5c8464a46a0d466e0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wri9nzyva = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1wri9nzyva();
// import { isCompositeType } from "graphql";

const museumsData = (cov_1wri9nzyva().s[0]++, {
  museums: [{
    name: "National Ballpark Museum",
    rating: 4.8,
    placeId: "ChIJb13H9tx4bIcRPQoWtgSMyKk",
    latitude: 39.7355683,
    longitude: -104.9905479,
    image: "http://www.kirklandmuseum.org/",
    price_level: 3,
    wheelchair_accessible: true
  }, {
    name: "Union Station Fountains",
    rating: 4.9,
    placeId: "ChIJocNwSiZ5bIcRRfsuPp4C400",
    latitude: 39.7526149,
    longitude: -105.0004503,
    image: "../images/city.png",
    price_level: 2,
    wheelchair_accessible: false
  }, {
    name: "Kirkland Museum of Fine & Decorative Art",
    rating: 4.8,
    placeId: "ChIJXwSNg9R-bIcRltbMQ0joT70",
    latitude: 39.7355683,
    longitude: -104.9905479,
    image: "../images/city.png",
    price_level: 3,
    wheelchair_accessible: true
  }]
});
export default museumsData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtdXNldW1zRGF0YSIsIm11c2V1bXMiLCJuYW1lIiwicmF0aW5nIiwicGxhY2VJZCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaW1hZ2UiLCJwcmljZV9sZXZlbCIsIndoZWVsY2hhaXJfYWNjZXNzaWJsZSJdLCJzb3VyY2VzIjpbIm11c2V1bXNEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGlzQ29tcG9zaXRlVHlwZSB9IGZyb20gXCJncmFwaHFsXCI7XG5cbmNvbnN0IG11c2V1bXNEYXRhID0ge1xuICBtdXNldW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJOYXRpb25hbCBCYWxscGFyayBNdXNldW1cIixcbiAgICAgIHJhdGluZzogNC44LFxuICAgICAgcGxhY2VJZDogXCJDaElKYjEzSDl0eDRiSWNSUFFvV3RnU015S2tcIixcbiAgICAgIGxhdGl0dWRlOiAzOS43MzU1NjgzLFxuICAgICAgbG9uZ2l0dWRlOiAtMTA0Ljk5MDU0NzksXG4gICAgICBpbWFnZTogXCJodHRwOi8vd3d3LmtpcmtsYW5kbXVzZXVtLm9yZy9cIixcbiAgICAgIHByaWNlX2xldmVsOiAzLFxuICAgICAgd2hlZWxjaGFpcl9hY2Nlc3NpYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJVbmlvbiBTdGF0aW9uIEZvdW50YWluc1wiLFxuICAgICAgcmF0aW5nOiA0LjksXG4gICAgICBwbGFjZUlkOiBcIkNoSUpvY053U2laNWJJY1JSZnN1UHA0QzQwMFwiLFxuICAgICAgbGF0aXR1ZGU6IDM5Ljc1MjYxNDksXG4gICAgICBsb25naXR1ZGU6IC0xMDUuMDAwNDUwMyxcbiAgICAgIGltYWdlOiBcIi4uL2ltYWdlcy9jaXR5LnBuZ1wiLFxuICAgICAgcHJpY2VfbGV2ZWw6IDIsXG4gICAgICB3aGVlbGNoYWlyX2FjY2Vzc2libGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJLaXJrbGFuZCBNdXNldW0gb2YgRmluZSAmIERlY29yYXRpdmUgQXJ0XCIsXG4gICAgICByYXRpbmc6IDQuOCxcbiAgICAgIHBsYWNlSWQ6IFwiQ2hJSlh3U05nOVItYkljUmx0Yk1RMGpvVDcwXCIsXG4gICAgICBsYXRpdHVkZTogMzkuNzM1NTY4MyxcbiAgICAgIGxvbmdpdHVkZTogLTEwNC45OTA1NDc5LFxuICAgICAgaW1hZ2U6IFwiLi4vaW1hZ2VzL2NpdHkucG5nXCIsXG4gICAgICBwcmljZV9sZXZlbDogMyxcbiAgICAgIHdoZWVsY2hhaXJfYWNjZXNzaWJsZTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbXVzZXVtc0RhdGE7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaOztBQUVBLE1BQU1BLFdBQVcsNkJBQUc7RUFDbEJDLE9BQU8sRUFBRSxDQUNQO0lBQ0VDLElBQUksRUFBRSwwQkFBMEI7SUFDaENDLE1BQU0sRUFBRSxHQUFHO0lBQ1hDLE9BQU8sRUFBRSw2QkFBNkI7SUFDdENDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCQyxTQUFTLEVBQUUsQ0FBQyxXQUFXO0lBQ3ZCQyxLQUFLLEVBQUUsZ0NBQWdDO0lBQ3ZDQyxXQUFXLEVBQUUsQ0FBQztJQUNkQyxxQkFBcUIsRUFBRTtFQUN6QixDQUFDLEVBQ0Q7SUFDRVAsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQkMsTUFBTSxFQUFFLEdBQUc7SUFDWEMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0Q0MsUUFBUSxFQUFFLFVBQVU7SUFDcEJDLFNBQVMsRUFBRSxDQUFDLFdBQVc7SUFDdkJDLEtBQUssRUFBRSxvQkFBb0I7SUFDM0JDLFdBQVcsRUFBRSxDQUFDO0lBQ2RDLHFCQUFxQixFQUFFO0VBQ3pCLENBQUMsRUFDRDtJQUNFUCxJQUFJLEVBQUUsMENBQTBDO0lBQ2hEQyxNQUFNLEVBQUUsR0FBRztJQUNYQyxPQUFPLEVBQUUsNkJBQTZCO0lBQ3RDQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsU0FBUyxFQUFFLENBQUMsV0FBVztJQUN2QkMsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQkMsV0FBVyxFQUFFLENBQUM7SUFDZEMscUJBQXFCLEVBQUU7RUFDekIsQ0FBQztBQUVMLENBQUM7QUFFRCxlQUFlVCxXQUFXIn0=