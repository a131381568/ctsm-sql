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
  let emptyObj = {
    name: "",
    id: null,
    email: "",
    iat: null,
    token: "",
    exp: null,
    refreshToken: "",
    refreshExp: null,
    errorTitle: "",
    errorMsg: ""
  }

  try {
    const jwtObj = await jwt.verify(jwtStr, SECRET)
    return jwtObj
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.log("憑證已過期")
    }
    if (err.name === "JsonWebTokenError") {
      console.log("憑證格式有誤，請重新登入。")
    }
    emptyObj.errorTitle = err.name
    emptyObj.errorMsg = err.message
    // console.log(emptyObj)
    return emptyObj
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let isAdminPage = false
    // if (isAdminPage) {
    // console.log("----------------")
    console.log(req.body.operationName)
    // console.log("----------------")
    // 每次請求時都檢查是否有 token
    const jwtStr = req.headers['authorization']
    const jwtToken = jwtStr.replace('Bearer ', '')
    const fileSize = req.headers['content-length']

    if (jwtToken) {
      // console.log("有 jwtToken")
      const jwtInfo = await translateJWT(jwtToken)
      if (req.body.operationName === 'SingleUpload') {
        return { jwtInfo, fileSize }
      } else {
        return { jwtInfo }
      }

    } else {
      // console.log("無 jwtToken")
      return {}
    }
  },
  uploads: false
});

server.start().then(res => {
  app.use(graphqlUploadExpress({ maxFileSize: 20000000, maxFiles: 1 }));
  server.applyMiddleware({ app, path: '/graphql' });
  // server.applyMiddleware({ app, path: '/specialUrl' });
  // app.get('/', (req, res) => res.send('Babel Working!'));
  // app.get('/test', (req, res) => res.json(server));
  app.listen({ port: 4000 }, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
  )
})
