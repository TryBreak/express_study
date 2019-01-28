var express = require('express');
var router = express.Router();
let url = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`respond with a resource,${req._parsedOriginalUrl.href}`);
});
//二级路由
router.get('/test', function(req, res, next) {
  res.send('test');
});
module.exports = router;
