require('dotenv').config({
  path: ".env." + process.env.NODE_ENV
})

// import pgPromise from 'pg-promise';
const connectStr = {
  host: process.env.BE_HOST,
  port: process.env.BE_PORT,
  database: process.env.BE_DATABASE,
  user: process.env.BE_USER,
  password: process.env.BE_PASSWORD
};
// const pgp = pgPromise({});
// const psql = pgp(connectStr);

const knex = require('knex')({
  client: 'pg',
  connection: connectStr
});

// export default knex 
module.exports = knex