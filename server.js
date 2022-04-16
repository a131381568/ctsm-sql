require('dotenv').config({
  path: ".env." + process.env.NODE_ENV
})

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const app = express();
const { graphqlUploadExpress } = require('graphql-upload');

import typeDefs from './pg-schema';
import resolvers from './pg-resolver';

const jwt = require('jsonwebtoken');
const SECRET = process.env.BE_JWT_SECRET;

const translateJWT = async (jwtStr) => {
  const tokenRmBearer = jwtStr.replace('Bearer ', '')
  try {
    const jwtObj = await jwt.verify(tokenRmBearer, SECRET)
    return jwtObj
  } catch (err) {
    // console.log(err.name, err.message)
    return {}
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const jwtToken = req.headers['authorization']
    if (jwtToken) {
      const me = await translateJWT(jwtToken)
      return { me };
    } else {
      return {}
    }
  }
});

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
