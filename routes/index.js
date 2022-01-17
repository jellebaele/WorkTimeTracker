const expressRouter = require('express').Router;
const authController = require('./controllers/authController');
const requireLogin = require('../middlewares/requireLogin');

module.exports = () => {
   const router = expressRouter();

   router.get('/healthcheck', requireLogin, (req, res) => {
      res.sendStatus(200);
   });

   router.get('/', (req, res) => {
      res.send('Homepage');
   });

   router.use('/auth', authController);

   return router;
};
