var db = require('./db');

module.exports ={

	get: function(id, callback){
		var sql = "select * from exam where id="+id;
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},



	getAll: function(callback){
		var sql = "select * from exam";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	

getByUname: function(username, callback){
		var sql = "select * from salary where teacher_name='"+username+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
			
				console.log(results);
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	

	validate: function(user, callback){
		var sql = "select * from user where username='"+user.uname+"' and password='"+user.password+"'";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	insert: function(user, callback){
		var sql = "insert into exam values('"+user.id+"', '"+user.uname+"', '"+user.question+"', '"+user.date+"','','')";

		

		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	update: function(user, callback){
var sql = "update salary set name='"+user.name+"', salary='"+user.salary+"', teacher_name='' where id='"+user.id+"'";
				
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	
	},
	

	delete: function(id, callback){
		var sql = "delete from exam where id="+id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}