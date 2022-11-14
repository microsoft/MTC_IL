require('dotenv').config();

exports.config = {
    port: process.env.PORT || 3001,
    dbUser: "<db-user>",
    dbPassword: "<db-password>",
    dbServer: "<db-server>",
    dbDatabase: "<db-database>",
  };


