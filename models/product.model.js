var mongoose = require('mongoose');

var prodSchema = new mongoose.Schema({
	name: String,
	img_thumb: String,
	img_1: String,
	img_2: String,
	img_3: String,
	img_4: String,
	size: Array,
	price: String
});

var Product = mongoose.model('Product', prodSchema, 'products');

module.exports = Product;