import React from 'react';
import { Router } from '@reach/router';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  uri: 'https://juanx-graphql.herokuapp.com/v1/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <SongList path="/" />
        <SongCreate path="create-song" />
        <SongDetail path="song-detail" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
