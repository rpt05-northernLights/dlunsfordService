var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
    // unique: true
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  job_title: {
    type: String
  },
  job_type: {
    type: String
  },
  company_id: { type: Schema.Types.ObjectId, ref: 'company' }
});

module.exports = mongoose.model('user', UserSchema);
