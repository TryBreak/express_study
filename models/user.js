const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produtSchema = new Schema({
  userId: String,
  userName: String,
  userAge: Number,
  class: {
    name: String,
    num: Number
  }
});

module.exports = mongoose.model('User', produtSchema, 'users');
