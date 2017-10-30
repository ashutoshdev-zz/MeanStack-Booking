var mongoose = require('mongoose');

var pageSchema = new mongoose.Schema({
	title: { type: String},
	role: { type: String},
        description: { type: String},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

pageSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});

module.exports = mongoose.model('Page', pageSchema);