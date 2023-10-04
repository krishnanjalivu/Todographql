import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.mocki.io/playground?endpoint=https://api.mocki.io/v2/c4d7a195/graphql',
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>
);
