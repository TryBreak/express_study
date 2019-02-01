const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Goods = require('../models/goods');
const { DB_URL } = require('../base.js');
//链接MongoDB数据库
const dbUrlRoot = DB_URL + '/demo';
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
router.post('/', (req, res, next) => {
  let page = parseInt(req.param('page'));
  let pageSize = parseInt(req.param('size'));
  let sort = parseInt(req.param('sort'));
  let min = parseInt(req.param('min'));
  let max = parseInt(req.param('max'));

  let skip = (page - 1) * pageSize;

  let params = {
    price: {
      $gt: min,
      $lte: max
    }
  };

  let goodsModel = Goods.find(params)
    .skip(skip)
    .limit(pageSize);
  goodsModel.sort({ price: sort });

  goodsModel.exec((err, doc) => {
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
        list: doc
      });
    }
  });
});

router.get('/user', (req, res, next) => {
  const Users = require('../models/user.js');
  Users.findOne({ userId: '000' }, (err, doc) => {
    if (err) {
      res.json({
        status: '-1',
        msg: err.message
      });
    } else {
      Goods.findOne({ proudctId: '2019130000' }, (err2, doc2) => {
        if (err2) {
          res.json({
            status: '-1',
            msg: err.message
          });
        } else {
          doc.carList.push(doc2);
          doc.save((err3, doc3) => {
            if (err3) {
              res.json({
                status: '-1',
                msg: err.message
              });
            } else {
              res.json({
                status: '0',
                msg: '',
                result: {
                  list: doc3
                }
              });
            }
          });
        }
      });
    }
  });
});
module.exports = router;
