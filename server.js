const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const app = express();


const { graphqlUploadExpress } = require('graphql-upload');

import typeDefs from './pg-schema';
import resolvers from './pg-resolver';

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(res => {

  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app, path: '/graphql' });

  // server.applyMiddleware({ app, path: '/specialUrl' });
  // app.get('/', (req, res) => res.send('Babel Working!'));
  // app.get('/test', (req, res) => res.json(server));

  app.listen({ port: 4000 }, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
  )
})
