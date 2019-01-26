var express = require('express');
var router = express.Router();
let url = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`respond with a resource,${req._parsedOriginalUrl.href}`);
});

module.exports = router;
