const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();

// Set up view engine
app.set('view engine', 'hbs');

// Set up wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// ROUTES
(async function () {
  // Use const when we want a variable that cannot be reassigned
  const landingRoutes = require('./routes/landing');
  const postersRoutes = require('./routes/posters')

  app.use('/', landingRoutes);
  app.use('/posters', postersRoutes);

})();


app.listen(3000, function () {
  console.log('Server has started');
});