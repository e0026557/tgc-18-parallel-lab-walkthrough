const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('display products')
})

router.get('/create', function(req, res) {
  res.send('create product')
})


module.exports = router;