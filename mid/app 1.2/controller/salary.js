var express = require('express');
var db = require.main.require('./models/db');
var router = express.Router();


router.get('/', function(req, res){

	if(req.session.username != null){

		var sql = "select * from salary where teacher_name='"+req.session.username+"'";
		db.getResults(sql, function(results){

			res.render('salary/salary', { userList : results, uname: req.session.username});
		});

	}else{
		res.redirect('/login');
	}
});

module.exports = router;