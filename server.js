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
    if (err.name === "TokenExpiredError") {
      console.log("憑證已過期")
    }
    if (err.name === "JsonWebTokenError") {
      console.log("憑證格式有誤，請重新登入。")
    }
    console.log(err.name, err.message)
    // return {
    //   errorTitle: err.name,
    //   errorMsg: err.message
    // }
    // return jwtObj
    return {}
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const jwtToken = req.headers['authorization']
    if (jwtToken) {
      console.log("有 jwtToken")
      const me = await translateJWT(jwtToken)
      return { me };
    } else {
      console.log("無 jwtToken")
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
