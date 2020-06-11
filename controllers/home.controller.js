var Category = require('../models/category.model');

module.exports.index = async function(req, res, next){
	var cats = await Category.find();
	res.render('index', {
		cats: cats
	});
}