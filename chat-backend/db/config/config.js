require("dotenv").config();
let { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
let conf = {
  development: {
    username: "postgres",
    password: "postgres56#",
    database: "chat_app",
    host: "localhost",
    dialect: "postgres",
  },

  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "postgres",
  },
};
module.exports = conf;
