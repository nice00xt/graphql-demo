import React from 'react';
import { Router } from '@reach/router';
import { theme, ThemeProvider } from "@chakra-ui/core";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// import { WebSocketLink } from 'apollo-link-ws';
// import { HttpLink } from 'apollo-link-http';

import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import Layout from './components/Layout';

import './App.scss';

const client = new ApolloClient({
  uri: 'https://juanx-graphql.herokuapp.com/v1/graphql'
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
