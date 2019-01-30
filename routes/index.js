var express = require('express');
var router = express.Router();
const data = {
  name: '梅昌亮',
  age: '24'
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    body: 'Express is very good xxx',
    data
  });
});

module.exports = router;
