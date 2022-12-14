function cov_2murmeigs8() {
  var path = "/Users/Andrew/turing/mod4/project/FE-FieldTripper/src/testData/singleMuseumData.js";
  var hash = "e875f5ba71bdcb885c681ed540d55023ede47725";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Andrew/turing/mod4/project/FE-FieldTripper/src/testData/singleMuseumData.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 25
        },
        end: {
          line: 31,
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
    hash: "e875f5ba71bdcb885c681ed540d55023ede47725"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2murmeigs8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2murmeigs8();
const singleMuseumData = (cov_2murmeigs8().s[0]++, {
  museum: {
    placeId: "ChIJb13H9tx4bIcRPQoWtgSMyKk",
    name: "National Ballpark Museum",
    rating: 4.8,
    latitude: 39.7538482,
    longitude: -104.9946742,
    price: 3,
    website: "http://www.kirklandmuseum.org/",
    address: '<span class="street-address">1201 Bannock St</span>, <span class="locality">Denver</span>, <span class="region">CO</span> <span class="postal-code">80204</span>, <span class="country-name">USA</span>',
    totalRatings: 453,
    separatedHoo: ['{:close=>{:day=>0, :time=>"1700"}, :open=>{:day=>0, :time=>"1200"}}', '{:close=>{:day=>2, :time=>"1700"}, :open=>{:day=>2, :time=>"1100"}}', '{:close=>{:day=>3, :time=>"1700"}, :open=>{:day=>3, :time=>"1100"}}', '{:close=>{:day=>4, :time=>"1700"}, :open=>{:day=>4, :time=>"1100"}}', '{:close=>{:day=>5, :time=>"1700"}, :open=>{:day=>5, :time=>"1100"}}', '{:close=>{:day=>6, :time=>"1700"}, :open=>{:day=>6, :time=>"1100"}}'],
    combinedHoo: ["Monday: Closed", "Tuesday: 11:00 AM – 5:00 PM", "Wednesday: 11:00 AM – 5:00 PM", "Thursday: 11:00 AM – 5:00 PM", "Friday: 11:00 AM – 5:00 PM", "Saturday: 11:00 AM – 5:00 PM", "Sunday: 12:00 – 5:00 PM"]
  }
});
export default singleMuseumData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzaW5nbGVNdXNldW1EYXRhIiwibXVzZXVtIiwicGxhY2VJZCIsIm5hbWUiLCJyYXRpbmciLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInByaWNlIiwid2Vic2l0ZSIsImFkZHJlc3MiLCJ0b3RhbFJhdGluZ3MiLCJzZXBhcmF0ZWRIb28iLCJjb21iaW5lZEhvbyJdLCJzb3VyY2VzIjpbInNpbmdsZU11c2V1bURhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2luZ2xlTXVzZXVtRGF0YSA9IHtcbiAgbXVzZXVtOiB7XG4gICAgcGxhY2VJZDogXCJDaElKYjEzSDl0eDRiSWNSUFFvV3RnU015S2tcIixcbiAgICBuYW1lOiBcIk5hdGlvbmFsIEJhbGxwYXJrIE11c2V1bVwiLFxuICAgIHJhdGluZzogNC44LFxuICAgIGxhdGl0dWRlOiAzOS43NTM4NDgyLFxuICAgIGxvbmdpdHVkZTogLTEwNC45OTQ2NzQyLFxuICAgIHByaWNlOiAzLFxuICAgIHdlYnNpdGU6IFwiaHR0cDovL3d3dy5raXJrbGFuZG11c2V1bS5vcmcvXCIsXG4gICAgYWRkcmVzczpcbiAgICAgICc8c3BhbiBjbGFzcz1cInN0cmVldC1hZGRyZXNzXCI+MTIwMSBCYW5ub2NrIFN0PC9zcGFuPiwgPHNwYW4gY2xhc3M9XCJsb2NhbGl0eVwiPkRlbnZlcjwvc3Bhbj4sIDxzcGFuIGNsYXNzPVwicmVnaW9uXCI+Q088L3NwYW4+IDxzcGFuIGNsYXNzPVwicG9zdGFsLWNvZGVcIj44MDIwNDwvc3Bhbj4sIDxzcGFuIGNsYXNzPVwiY291bnRyeS1uYW1lXCI+VVNBPC9zcGFuPicsXG4gICAgdG90YWxSYXRpbmdzOiA0NTMsXG4gICAgc2VwYXJhdGVkSG9vOiBbXG4gICAgICAnezpjbG9zZT0+ezpkYXk9PjAsIDp0aW1lPT5cIjE3MDBcIn0sIDpvcGVuPT57OmRheT0+MCwgOnRpbWU9PlwiMTIwMFwifX0nLFxuICAgICAgJ3s6Y2xvc2U9Pns6ZGF5PT4yLCA6dGltZT0+XCIxNzAwXCJ9LCA6b3Blbj0+ezpkYXk9PjIsIDp0aW1lPT5cIjExMDBcIn19JyxcbiAgICAgICd7OmNsb3NlPT57OmRheT0+MywgOnRpbWU9PlwiMTcwMFwifSwgOm9wZW49Pns6ZGF5PT4zLCA6dGltZT0+XCIxMTAwXCJ9fScsXG4gICAgICAnezpjbG9zZT0+ezpkYXk9PjQsIDp0aW1lPT5cIjE3MDBcIn0sIDpvcGVuPT57OmRheT0+NCwgOnRpbWU9PlwiMTEwMFwifX0nLFxuICAgICAgJ3s6Y2xvc2U9Pns6ZGF5PT41LCA6dGltZT0+XCIxNzAwXCJ9LCA6b3Blbj0+ezpkYXk9PjUsIDp0aW1lPT5cIjExMDBcIn19JyxcbiAgICAgICd7OmNsb3NlPT57OmRheT0+NiwgOnRpbWU9PlwiMTcwMFwifSwgOm9wZW49Pns6ZGF5PT42LCA6dGltZT0+XCIxMTAwXCJ9fScsXG4gICAgXSxcbiAgICBjb21iaW5lZEhvbzogW1xuICAgICAgXCJNb25kYXk6IENsb3NlZFwiLFxuICAgICAgXCJUdWVzZGF5OiAxMTowMOKAr0FN4oCJ4oCT4oCJNTowMOKAr1BNXCIsXG4gICAgICBcIldlZG5lc2RheTogMTE6MDDigK9BTeKAieKAk+KAiTU6MDDigK9QTVwiLFxuICAgICAgXCJUaHVyc2RheTogMTE6MDDigK9BTeKAieKAk+KAiTU6MDDigK9QTVwiLFxuICAgICAgXCJGcmlkYXk6IDExOjAw4oCvQU3igInigJPigIk1OjAw4oCvUE1cIixcbiAgICAgIFwiU2F0dXJkYXk6IDExOjAw4oCvQU3igInigJPigIk1OjAw4oCvUE1cIixcbiAgICAgIFwiU3VuZGF5OiAxMjowMOKAieKAk+KAiTU6MDDigK9QTVwiLFxuICAgIF0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGVNdXNldW1EYXRhO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixNQUFNQSxnQkFBZ0IsNkJBQUc7RUFDdkJDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsNkJBQTZCO0lBQ3RDQyxJQUFJLEVBQUUsMEJBQTBCO0lBQ2hDQyxNQUFNLEVBQUUsR0FBRztJQUNYQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsU0FBUyxFQUFFLENBQUMsV0FBVztJQUN2QkMsS0FBSyxFQUFFLENBQUM7SUFDUkMsT0FBTyxFQUFFLGdDQUFnQztJQUN6Q0MsT0FBTyxFQUNMLHlNQUF5TTtJQUMzTUMsWUFBWSxFQUFFLEdBQUc7SUFDakJDLFlBQVksRUFBRSxDQUNaLHFFQUFxRSxFQUNyRSxxRUFBcUUsRUFDckUscUVBQXFFLEVBQ3JFLHFFQUFxRSxFQUNyRSxxRUFBcUUsRUFDckUscUVBQXFFLENBQ3RFO0lBQ0RDLFdBQVcsRUFBRSxDQUNYLGdCQUFnQixFQUNoQiw2QkFBNkIsRUFDN0IsK0JBQStCLEVBQy9CLDhCQUE4QixFQUM5Qiw0QkFBNEIsRUFDNUIsOEJBQThCLEVBQzlCLHlCQUF5QjtFQUU3QjtBQUNGLENBQUM7QUFFRCxlQUFlWixnQkFBZ0IifQ==