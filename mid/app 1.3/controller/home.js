var express = require('express');
var userModel = require.main.require('./models/user');
var salaryModel = require.main.require('./models/salary');
var router = express.Router();

router.get('/', function(req, res){

	if(req.session.username != null){
		res.render('home/index', {uname: req.session.username});
	}else{
		res.redirect('/login');
	}
});


router.get('/view_users', function(req, res){
	
	if(req.session.username != null){
		userModel.getAll(function(results){
			res.render('home/userlist', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});


router.get('/create', function(req, res){
	if(req.session.username != null){
		res.render('home/add');
	}else{
		res.redirect('/login');
	}
});

router.post('/create', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			password	: req.body.password,
			type		: req.body.type
		}

		userModel.insert(user, function(status){
			if(status){
				res.redirect('/home/view_users');
			}else{
				res.redirect('/home/create');
			}
		});
	}else{
		res.redirect('/login');
	}
});


router.get('/delete/:id', function(req, res){
	
	userModel.get(req.params.id, function(result){
		res.render('home/delete', {user: result});
	});
	
});

router.post('/delete/:id', function(req, res){
	userModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/view_users');
		}else{
			res.redirect('/home');
		}
	});
});

router.get('/salary', function(req, res){
	
	if(req.session.username != null){
		var user ={
			uname 		: req.session.username,
			
		}
salaryModel.getByUname(function(results){
			res.render('home/salary', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
		
});

router.get('/salary/delete/:id', function(req, res){
	
	salaryModel.get(req.params.id, function(result){
		res.render('home/sdelete', {user: result});
	});
	
});

router.post('/salary/delete/:id', function(req, res){
	salaryModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/salary');
		}else{
			res.redirect('/home/salary');
		}
	});
});


router.get('/salary/insert', function(req, res){
	if(req.session.username != null){
		res.render('home/sinsert');
	}else{
		res.redirect('/login');
	}
});

router.post('/salary/insert', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			salary	: req.body.salary,
			tname		: req.body.tname
		}

		salaryModel.insert(user, function(status){
			if(status){
				res.redirect('/home/salary');
			}else{
				res.redirect('/home/salary');
			}
		});
	}else{
		res.redirect('/login');
	}
});



router.get('/salary/edit/:id', function(req, res){
	
	salaryModel.get(req.params.id, function(result){
		res.render('home/sedit', {user: result});
	});
	
});

router.post('/salary/edit/:id', function(req, res){
		var user = {
		name: req.body.name,
		salary: req.body.salary,
		teacher_name: req.body.teacher_name,
		id: req.params.id
	};

 salaryModel.update(user, function(status){
		if(status){
			res.redirect('/home/salary');
		}else{
			res.redirect('/home/salary');
		}
	});
})
















module.exports = router;