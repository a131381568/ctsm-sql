require('dotenv').config({
  path: ".env." + process.env.NODE_ENV
})

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const app = express();

const { graphqlUploadExpress } = require('graphql-upload');

import typeDefs from './pg-schema';
import resolvers from './pg-resolver';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    console.log("xxx")
    const token = req.headers['x-token']
    console.log(token)
    // // 1. 取出
    // const token = req.headers['x-token'];
    // if (token) {
    //   try {
    //     // 2. 檢查 token + 取得解析出的資料
    //     const me = await jwt.verify(token, SECRET);
    //     // 3. 放進 context
    //     return { me };
    //   } catch (e) {
    //     throw new Error('Your session expired. Sign in again.');
    //   }
    // }
    // // 如果沒有 token 就回傳空的 context 出去
    // return {};
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
