/**
 * LinkSqlController
 *
 * @description :: Server-side logic for managing Linksqls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
	tokenExpire: function(request, response, callback) {
		response.send(GlobalMethods.getUser(request, response, callback));
	},
	getDueCapital: function(request, response, callback) {
		if (GlobalMethods.getUser(request, response, callback) == false) {
			return false;
		}
		var userId = GlobalMethods.getUser(request, response, callback).id;
		userId = 66340;
		var startTime = "'2017-07-02 00:00:00'";

		var mysql = require("mysql"); //调用MySQL模块
		var TABLE = "s_user_due_detail";
		var connection = mysql.createConnection({host: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com', user: 'pptang_123', password: 'E8b9J7TjPs0u4Nf', port: '3306' ,database: 'ppmiao_test'});
		connection.connect();
		connection.query("select sum(due_capital) from " + TABLE + " where user_id = " + userId + " and start_time > " + startTime, function(error, results, fields) {
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
