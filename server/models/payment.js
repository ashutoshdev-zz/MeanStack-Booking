var mongoose = require('mongoose');
var paymentSchema = new mongoose.Schema({
        amount: { type: String},
        balance_transaction: { type: String},
        created: { type: String},
        currency: { type: String},
        description: { type: String},
        ch_id: { type: String},
        order_id: { type: String},
        status: { type: String},
        paid: { type: String},
        trip_url: { type: String},
        user_id: { type: String},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});
paymentSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});
module.exports = mongoose.model('Payment', paymentSchema);