const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'backpot',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAlisases: false,
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'backpot',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAlisases: false,
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'backpot',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAlisases: false,
  },
};
