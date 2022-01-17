const express = require('express');
const expressSetup = require('./expressSetup');
const databaseSetup = require('./databaseSetup');

const setupServer = () => {
   const app = express();

   expressSetup(app);
   databaseSetup();
   return app;
};

module.exports = {
   setupServer,
};
