var mongoose = require('mongoose');
var pictureSchema = new mongoose.Schema({
	title: { type: String, required: '{PATH} is required!'},
        img: { type: String, required: '{PATH} is required!'}, 
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});
pictureSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});
module.exports = mongoose.model('Picture', pictureSchema);