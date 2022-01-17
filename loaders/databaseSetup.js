const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = () => {
   mongoose.connect(keys.mongoUri, (error) => {
      if (error) console.error('Failed to connect to database. ', error);
      else console.log('Connected to database.');
   });
};
