const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  use_env_variable: 'DATABASE_URL',
  dialect: process.env.DB_DIALECT,
  logging: console.log,
};
