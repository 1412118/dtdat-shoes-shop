var mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
	cat_id: String,
	name: String,
	img_url: String
});

var Category = mongoose.model('Category', catSchema, 'categories');

module.exports = Category;