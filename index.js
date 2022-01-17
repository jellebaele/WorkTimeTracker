const express = require('express');
const loader = require('./loaders');

const app = loader.setupServer();

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));

   const path = require('path');
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on 'http://localhost:${PORT}'`);
});
