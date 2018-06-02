const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TypeSchema = new Schema({
  name: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('type', TypeSchema);
