var mongoose = require('mongoose');
var linkSchema = new mongoose.Schema({
	linkname: { type: String, required: '{PATH} is required!'},
        img: { type: String, required: '{PATH} is required!'}, 
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});
linkSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});
module.exports = mongoose.model('Link', linkSchema);