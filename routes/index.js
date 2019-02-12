var express = require('express');
var router = express.Router();
const data = [
  {
    name: '梅昌亮',
    age: '24'
  },
  {
    name: '梅昌亮',
    age: '24'
  },
  {
    name: '梅昌亮',
    age: '24'
  },
  {
    name: '梅昌亮',
    age: '24'
  },
  {
    name: '梅昌亮',
    age: '24'
  },
  {
    name: '梅昌亮',
    age: '24'
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome',
    body: '这里是首页,此处传为 arr',
    data
  });
});

module.exports = router;
