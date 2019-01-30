const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produtSchema = new Schema({
  proudctId: String,
  proudctIdName: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Good', produtSchema);
