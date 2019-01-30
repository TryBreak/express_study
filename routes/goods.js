const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Goods = require('../models/goods');
//链接MongoDB数据库
const dbUrlRoot = 'mongodb://meichangliang:123123@192.168.31.156:27017/demo';
const dbUrl = 'mongodb://192.168.31.156:27017/demo';
mongoose.connect(dbUrlRoot);
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected success.');
});
mongoose.connection.on('error', () => {
  console.log('MongoDB connected fail.');
});
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connected disconnected.');
});

router.get('/', (req, res, next) => {
  Goods.find({}, (err, doc) => {
    if (err) {
      res.json({
        status: '-1',
        msg: err.message
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      });
    }
  });
});
router.get('/page', (req, res, next) => {
  Goods.find({}, (err, doc) => {
    if (err) {
      res.json({
        status: '-1',
        msg: err.message
      });
    } else {
      res.render('ajax', {
        title: 'ajax 同步加异步',
        body: 'Express 加上同步加异步',
        data: doc
      });
    }
  });
});
module.exports = router;
