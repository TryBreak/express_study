const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produtSchema = new Schema({
  userId: String,
  userName: String,
  userAge: Number,
  carList: []
});

module.exports = mongoose.model('Userxxx', produtSchema, 'user');
