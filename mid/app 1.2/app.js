var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var registration = require('./controller/registration');
var login 		= require('./controller/login');
var profile 		= require('./controller/profile');
var available 		= require('./controller/available');
var offered 		= require('./controller/offered');
var upload 		= require('./controller/upload');
var check 		= require('./controller/check');
var studentsinfo 		= require('./controller/studentsinfo');
var exam 		= require('./controller/exam');
var take 		= require('./controller/take');
var questions 		= require('./controller/questions');
var grades 		= require('./controller/grades');
var checkgrades 		= require('./controller/checkgrades');
var notices 		= require('./controller/notices');
var read 		= require('./controller/read');
var post 		= require('./controller/post');
var salary 		= require('./controller/salary');
var schedule 		= require('./controller/schedule');
var insertsalary 		= require('./controller/insertsalary');
var insertschedule 		= require('./controller/insertschedule');
var posted 		= require('./controller/posted');
var ctp 		= require('./controller/ctp');
var cta		= require('./controller/cta');
var ctacheck		= require('./controller/ctacheck');
var ratings		= require('./controller/ratings');
var script		= require('./controller/script');
var teachersinfo		= require('./controller/teachersinfo');
var home 		= require('./controller/home');
var logout 		= require('./controller/logout');
var app 		= express();

//config
app.set('view engine', 'ejs');

app.use('/abc', express.static('assets'));
//app.use('/abc/img', express.static('assets'));


//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use('/registration', registration);
app.use('/login', login);
app.use('/home/profile', profile);
app.use('/home/availabletuition', available);
app.use('/home/offeredtuition', offered);
app.use('/home/uploadnotes', upload);
app.use('/home/uploadnotes/checknotes', check);
app.use('/home/studentsinfo', studentsinfo);
app.use('/home/exam', exam);
app.use('/home/exam/take', take);
app.use('/home/exam/take/questions', questions);
app.use('/home/exam/grades', grades);
app.use('/home/exam/grades/checkgrades', checkgrades);
app.use('/home/notices', notices);
app.use('/home/notices/read', read);
app.use('/home/notices/post', post);
app.use('/home/notices/post/postednotices', posted);
app.use('/home/salary', salary);
app.use('/logout', logout);
app.use('/home/salary/insertsalary', insertsalary);
app.use('/home/schedule', schedule);
app.use('/home/ctp', ctp);
app.use('/home/cta', cta);
app.use('/home/cta/ctacheck', ctacheck);
app.use('/home/schedule/insertschedule', insertschedule);
app.use('/home/ratings', ratings);
app.use('/home/script', script);
app.use('/home/teachersinfo', teachersinfo);
app.use('/home', home);

/*app.get('/admin/user/:abc/:name', function(req, res){
	res.send(req.params.abc+" | "+req.params.name);
});*/

app.get('/', function(req, res){
	res.send("this is index page!<br><a href='/registration'> Registration</a> <a href='/login'> Login</a> ");
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});