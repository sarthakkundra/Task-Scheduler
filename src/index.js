import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import {  ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: `https://absolute-locust-15.hasura.app/v1/graphql`
})

const client  = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
 
  <React.StrictMode>
     <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
 
  document.getElementById('root')
);


