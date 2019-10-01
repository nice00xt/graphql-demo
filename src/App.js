import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://juanx-graphql.herokuapp.com/v1/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <span>test</span>
      </div>
    </ApolloProvider>
  );
}

export default App;
