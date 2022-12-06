import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_PRODUCTION_URI,
  // uri: process.env.REACT_APP_TEST_URI,
  headers: {
    "x-mock-match-request-body": true,
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
