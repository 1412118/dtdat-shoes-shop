var express = require('express');
var router = express.Router();

var controller = require('../controllers/home.controller');

router.get('/cats', controller.index);

module.exports = router;