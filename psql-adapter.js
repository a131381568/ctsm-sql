// import pgPromise from 'pg-promise';
const connectStr = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: '%Euk6kBk'
};
// const pgp = pgPromise({});
// const psql = pgp(connectStr);

const knex = require('knex')({
  client: 'pg',
  connection: connectStr
});

export default knex 