/**
 * LinkSqlController
 *
 * @description :: Server-side logic for managing Linksqls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
	tokenExpire :function(request, response, callback){
		// console.log(GlobalMethods.getUser(request, response, callback));
		response.send(GlobalMethods.getUser(request, response, callback));
	},
	getDueCapital: function(request, response, callback) {
		// var dueCapital = 0;
			console.log("-------------");
			console.log(GlobalMethods.getUser(request, response, callback));
			// console.log(GlobalMethods.getUser(request, response, callback)==false);
			console.log("-------------");
			// console.log(GlobalMethods.getUser(request, response, callback).token == undefined);
		// if(GlobalMethods.getUser(request, response, callback).token==undefined){
			return false;
		// }
		var userId = GlobalMethods.getUser(request, response, callback).id;
		console.log( GlobalMethods.getUser(request, response, callback));
		var startTime = "'2017-07-29 00:00:00'";

		var mysql = require("mysql"); //调用MySQL模块
		var DATABASE = "ppmiao_test";
		var TABLE = "s_user_due_detail";
		var connection = mysql.createConnection({host: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com', user: 'pptang_123', password: 'E8b9J7TjPs0u4Nf', port: '3306'});
		connection.connect();
		connection.query('use ' + DATABASE);
		// connection.query('select due_capital from ' + TABLE + ' where user_id='+userId, function(error, results, fields) {
		connection.query("select sum(due_capital) from " + TABLE + " where user_id = 66425 and start_time > " + startTime, function(error, results, fields) {
			if (error) {
				throw error;
			}
			if (results) {
				response.send({dueCapital: results[0]['sum(due_capital)']});
			}
		});
		connection.end();
		// return userId;
	}
};

// "select sum(due_capital) from s_user_due_detail where user_id = 66425 and due_capital > 5000 and start_time > '2017-07-29 00:00:00'";
