const express = require('express');
const { Poster } = require('../models');
const { createPosterForm, bootstrapField } = require('../forms')
const router = express.Router();

router.get('/', async function (req, res) {
  // SELECT * FROM posters
  const posters = await Poster.collection().fetch();
  res.render('posters/index', {
    posters: posters.toJSON()
  })
})

router.get('/create', function (req, res) {
  const form = createPosterForm();
  res.render('posters/create', {
    form: form.toHTML(bootstrapField)
  })
})

router.post('/create', function (req, res) {
  const form = createPosterForm();
  // second arg is an object that takes 3 functions: success, error and empty
  form.handle(req, {
    success: async function (form) {
      // extract the information from the form to create a new poster
      const poster = new Poster(); // the model represents one table, one instance == one row in the table
      poster.set('name', form.data.name);
      poster.set('cost', form.data.cost)
      poster.set('description', form.data.description);
      await poster.save(); // save the data into the database
      res.redirect('/posters')
    },
    error: function (form) {
      res.render('posters/create', {
        form: form.toHTML(bootstrapField)
      })
    },
    empty: function (form) {
      res.render('posters/create', {
        form: form.toHTML(bootstrapField)
      })
    }
  })
})


module.exports = router;