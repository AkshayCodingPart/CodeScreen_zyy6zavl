var express = require('express');
var router = express.Router();

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;