var mongoose = require('mongoose');
var interestSchema = new mongoose.Schema({
        user_id: { type: String},
        trip_url: { type: String},
        status: { type: String},
        payment_id: { type: String},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});
interestSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});
module.exports = mongoose.model('Interest', interestSchema);