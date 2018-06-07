const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MessageSchema = new Schema({
  case_id: { type: Schema.Types.ObjectId, ref: 'ticket' },
  message: {
    type: String
  },
  date_time: {
    type: Date
  }
});

module.exports = mongoose.model('message', MessageSchema);
