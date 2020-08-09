var express = require('express');
var upload = require('express-fileupload');
var db = require.main.require('./models/db');
var userModel = require.main.require('./models/user');
var availableModel = require.main.require('./models/available');
var offeredModel = require.main.require('./models/offered');
var ratingsModel = require.main.require('./models/ratings');
var salaryModel = require.main.require('./models/salary');
var scheduleModel = require.main.require('./models/schedule');
var examModel = require.main.require('./models/exam');
var rnoticesModel = require.main.require('./models/rnotices');
var pnoticesModel = require.main.require('./models/pnotices');
var gradeModel = require.main.require('./models/grade');
var ctaModel = require.main.require('./models/cta');
var router = express.Router();

router.get('/', function(req, res){

	if(req.session.username != null){
		res.render('home/index', {uname: req.session.username});
	}else{
		res.redirect('/login');
	}
});

router.get('/upload', function(req, res){
	
	if(req.session.username != null){
		
			res.render('home/upload');
		
	}else{
		res.redirect('/login');
	}
});

router.post('/upload',function(req,res){
	if(req.files){
	
	var file= req.files.file;
	var filename = file.name;
	console.log(filename);
	file.mv('./assets/'+filename, function (err)
	{
		if(err)
		{
			res.send(err);
		}
		else{
			res.send("<font color='green'><h3>File Uploaded Successfully</h3></font><a href='/home/upload'>Back</a>");
		}
	})
	}
});

router.get('/profile', function(req, res){
if(req.session.username != null){

		var username = req.session.username;
		userModel.getByUname(username, function(results){

			res.render('home/profile', { userList : results, uname: req.session.username});
		});

	}else{
		res.redirect('/login');
	}
});
router.get('/salary', function(req, res){
	
	if(req.session.username != null){
		salaryModel.getAll(function(results){
			res.render('home/salary', { results : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});
router.get('/cta', function(req, res){
	
	if(req.session.username != null){
		
			res.render('home/cta');
		
	}else{
		res.redirect('/login');
	}
});

router.get('/cta/ctacheck', function(req, res){
	
	if(req.session.username != null){
		ctaModel.getAll(function(results){
			res.render('home/ctacheck', { results : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/schedule', function(req, res){
	
	if(req.session.username != null){
		scheduleModel.getAll(function(results){
			res.render('home/schedule', { results : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});
router.get('/exam/take/questions', function(req, res){
	
	if(req.session.username != null){
		examModel.getAll(function(results){
			res.render('home/questions', { results : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});
router.get('/script', function(req, res){
	
	if(req.session.username != null){
		examModel.getAll(function(results){
			res.render('home/script', { results : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});
router.get('/exam/grades/checkgrades', function(req, res){
	
	if(req.session.username != null){
		gradeModel.getAll(function(results){
			res.render('home/checkgrades', { results : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});
router.get('/notices/read', function(req, res){
	
	if(req.session.username != null){
		rnoticesModel.getAll(function(results){
			res.render('home/read', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});
router.get('/notices/post/postednotices', function(req, res){
	
	if(req.session.username != null){
		pnoticesModel.getAll(function(results){
			res.render('home/posted', { results : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});
/*
router.get('/salary', function(req, res){
	
	if(req.session.username != null){

		var username = req.session.username;
		salaryModel.getByUname(username, function(results){

			res.render('home/salary', { results : results, uname : req.session.username});
		});

	}else{
		res.redirect('/login');
	}
});
*/



router.get('/availabletuition', function(req, res){
	
	if(req.session.username != null){
		availableModel.getAll(function(results){
			res.render('home/available', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/offeredtuition', function(req, res){
	
	if(req.session.username != null){
		offeredModel.getAll(function(results){
			res.render('home/offered', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/studentsinfo', function(req, res){
	
	if(req.session.username != null){
		userModel.students(function(results){
			res.render('home/studentsinfo', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/teachersinfo', function(req, res){
	
	if(req.session.username != null){
		userModel.teachers(function(results){
			res.render('home/teachersinfo', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/exam', function(req, res){
	
	if(req.session.username != null){
		
			res.render('home/exam');
		
	}else{
		res.redirect('/login');
	}
});

router.get('/notices', function(req, res){
	
	if(req.session.username != null){
		
			res.render('home/notices');
		
	}else{
		res.redirect('/login');
	}
});

router.get('/ctp', function(req, res){
	
	if(req.session.username != null){
		userModel.ctp(function(results){
			res.render('home/ctp', { userList : results, uname: req.session.username});
		});
	}else{
		res.redirect('/login');
	}
});


router.get('/ratings', function(req, res){
	
	if(req.session.username != null){
		ratingsModel.getAll(function(results){
			res.render('home/ratings', { userList : results, uname: req.session.username});
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
	if(req.session.username != null){
	userModel.get(req.params.id, function(result){
		res.render('home/delete', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});





router.post('/delete/:id', function(req, res){
	if(req.session.username != null){
	userModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/view_users');
		}else{
			res.redirect('/home');
		}
	});
	}
	else{res.redirect('/login')}
});


router.get('/salary/delete/:id', function(req, res){
	if(req.session.username != null){
	salaryModel.get(req.params.id, function(result){
		res.render('home/sdelete', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/salary/delete/:id', function(req, res){
	if(req.session.username != null){
	salaryModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/salary');
		}else{
			res.redirect('/home/salary');
		}
	});
	}
	else{
		res.redirect('/login');
	}
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
			id		: req.body.id
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
router.get('/cta/ctainsert', function(req, res){
	if(req.session.username != null){
		res.render('home/ctainsert');
	}else{
		res.redirect('/login');
	}
});

router.post('/cta/ctainsert', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			
			id		: req.body.id
		}

		ctaModel.insert(user, function(status){
			if(status){
				res.redirect('/home/cta/ctacheck');
			}else{
				res.redirect('/home/cta/ctacheck');
			}
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/cta/ctacheck/delete/:id', function(req, res){
	if(req.session.username != null){
	ctaModel.get(req.params.id, function(result){
		res.render('home/ctadelete', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/cta/ctacheck/delete/:id', function(req, res){
	if(req.session.username != null){
	ctaModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/cta/ctacheck');
		}else{
			res.redirect('/home/cta/ctacheck');
		}
	});
	}
	else{
		res.redirect('/login');
	}
});



router.get('/schedule/insert', function(req, res){
	if(req.session.username != null){
		res.render('home/insertschedule');
	}else{
		res.redirect('/login');
	}
});

router.post('/schedule/insert', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			day	: req.body.day,
			time	: req.body.time,
			id		: req.body.id
		}

		scheduleModel.insert(user, function(status){
			if(status){
				res.redirect('/home/schedule');
			}else{
				res.redirect('/home/schedule');
			}
		});
	}else{
		res.redirect('/login');
	}
});







router.get('/exam/take', function(req, res){
	if(req.session.username != null){
		res.render('home/take');
	}else{
		res.redirect('/login');
	}
});

router.post('/exam/take', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			question	: req.body.question,
			date	: req.body.date,
			id		: req.body.id
		}

		examModel.insert(user, function(status){
			if(status){
				res.redirect('/home/exam/take/questions');
			}else{
				res.redirect('/home/exam/take');
			}
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/exam/take/questions/delete/:id', function(req, res){
		if(req.session.username != null){
	examModel.get(req.params.id, function(result){
		res.render('home/qdelete', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/exam/take/questions/delete/:id', function(req, res){
		if(req.session.username != null){
	examModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/exam/take/questions');
		}else{
			res.redirect('/home/questions');
		}
	});
	
	}
	else{
		res.redirect('/login');
	}

});


router.get('/exam/grades', function(req, res){
	if(req.session.username != null){
		res.render('home/grades');
	}else{
		res.redirect('/login');
	}
});

router.post('/exam/grades', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			grade	: req.body.grade,
			date	: req.body.date,
			id		: req.body.id
		}

		gradeModel.insert(user, function(status){
			if(status){
				res.redirect('/home/exam/grades/checkgrades');
			}else{
				res.redirect('/home/exam/grades');
			}
		});
	}else{
		res.redirect('/login');
	}
});

router.get('/exam/grades/checkgrades/delete/:id', function(req, res){
	if(req.session.username != null){
	gradeModel.get(req.params.id, function(result){
		res.render('home/gdelete', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/exam/grades/checkgrades/delete/:id', function(req, res){
	if(req.session.username != null){
	gradeModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/exam/grades/checkgrades');
		}else{
			res.redirect('/home/exam/grades/checkgrades');
		}
	});
	}
	else{
		res.redirect('/login');
	}
});

router.get('/notices/post', function(req, res){
	if(req.session.username != null){
		res.render('home/post');
	}else{
		res.redirect('/login');
	}
});

router.post('/notices/post', function(req, res){
	
	if(req.session.username != null){

		var user ={
			uname 		: req.body.uname,
			notice	: req.body.notice,
			date	: req.body.date,
			id		: req.body.id
		}

		pnoticesModel.insert(user, function(status){
			if(status){
				res.redirect('/home/notices/post/postednotices');
			}else{
				res.redirect('/home/notices/post/postednotices');
			}
		});
	}else{
		res.redirect('/login');
	}
});
router.get('/notices/post/postednotices/delete/:id', function(req, res){
	if(req.session.username != null){
	pnoticesModel.get(req.params.id, function(result){
		res.render('home/pdelete', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/notices/post/postednotices/delete/:id', function(req, res){
	if(req.session.username != null){
	pnoticesModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/notices/post/postednotices');
		}else{
			res.redirect('/home/notices/post/postednotices');
		}
	});
	}
	else{
		res.redirect('/login');
	}
});

router.get('/salary/edit/:id', function(req, res){
	if(req.session.username != null){
	salaryModel.get(req.params.id, function(result){
		res.render('home/sedit', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/salary/edit/:id', function(req, res){
	if(req.session.username != null){
		var user = {
		name: req.body.name,
		salary: req.body.salary,
	
		id: req.params.id
	};

 salaryModel.update(user, function(status){
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


router.get('/schedule/edit/:id', function(req, res){
	if(req.session.username != null){
	scheduleModel.get(req.params.id, function(result){
		res.render('home/editschedule', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/schedule/edit/:id', function(req, res){
	if(req.session.username != null){
		var user = {
		name: req.body.name,
		day: req.body.day,
		time: req.body.time,
	
		id: req.params.id
	};

 scheduleModel.update(user, function(status){
		if(status){
			res.redirect('/home/schedule');
		}else{
			res.redirect('/home/schedule');
		}
	});
	}else{
		res.redirect('/login');
	}
});

router.get('/schedule/delete/:id', function(req, res){
	if(req.session.username != null){
	scheduleModel.get(req.params.id, function(result){
		res.render('home/deleteschedule', {user: result});
	});
	}
	else{
		res.redirect('/login');
	}
});

router.post('/schedule/delete/:id', function(req, res){
	if(req.session.username != null){
	scheduleModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/schedule');
		}else{
			res.redirect('/home/schedule');
		}
	});
	}
	else{
		res.redirect('/login');
	}
});

router.get('/profile/edit/:id', function(req, res){
	if(req.session.username != null){
	userModel.get(req.params.id, function(result){
		res.render('home/pedit', {user: result});
	});
	}else{
		res.redirect('/login');
	}
});

router.post('/profile/edit/:id', function(req, res){
	if(req.session.username != null){
		var user = {
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		gender: req.body.gender,
		education: req.body.education,
		type: req.body.type,
		id: req.params.id
	};

 userModel.update(user, function(status){
		if(status){
			res.redirect('/home/profile');
		}else{
			res.redirect('/home/profile');
		}
	});
	}else{
		res.redirect('/login');
	}
});














module.exports = router;