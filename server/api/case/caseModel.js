const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CaseSchema = new Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  categories: [{ type: Schema.Types.ObjectId, ref: 'category' }]
});

module.exports = mongoose.model('case', CaseSchema);
