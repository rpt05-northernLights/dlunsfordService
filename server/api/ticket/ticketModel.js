const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TicketSchema = new Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  categories: [{ type: Schema.Types.ObjectId, ref: 'category' }],
  message: [{ type: Schema.Types.ObjectId, ref: 'message' }]
});

module.exports = mongoose.model('ticket', TicketSchema);
