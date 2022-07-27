const express = require('express')
const router = express.Router();
router.get('/', function(req, res) {
  res.send('home page')
})

router.get('/faq', function(req, res) {
  res.send('faq')
})

router.get('/about-us', function(req, res) {
  res.send('about us')
})

module.exports = router;