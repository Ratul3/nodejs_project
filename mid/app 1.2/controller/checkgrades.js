var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res){
	res.render('exam/checkgrades');
});



module.exports = router;