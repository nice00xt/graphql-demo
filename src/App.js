import React from 'react';
import { Router } from '@reach/router';
import { theme, ThemeProvider } from "@chakra-ui/core";

import ApolloClient from "apollo-client";
import { ApolloProvider } from '@apollo/react-hooks';

import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import Layout from './components/Layout';

import './App.scss';

const wsurl = `ws://song-app-juanx.herokuapp.com/v1/graphql`;
const httpurl = 'https://song-app-juanx.herokuapp.com/v1/graphql';

const wsLink = new WebSocketLink({
  uri: wsurl,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: httpurl,
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' &&
      operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <SongList path="/" />
            <SongCreate path="create-song" />
            <SongDetail path="song-detail/:id" />
          </Router>
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
