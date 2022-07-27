const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();

// ROUTES
(async function () {
  // Use const when we want a variable that cannot be reassigned
  const landingRoutes = require('./routes/landing');
  const productRoutes = require('./routes/products')

  app.use('/', landingRoutes);
  app.use('/products', productRoutes);

})();


app.listen(3000, function () {
  console.log('Server has started');
});