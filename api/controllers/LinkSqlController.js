/**
 * LinkSqlController
 *
 * @description :: Server-side logic for managing Linksqls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	linksql: function(request, response, callback) {
		var mysql = require("mysql"); //调用MySQL模块
		var DATABASE = "ppmiao_test";
		var TABLE = "s_user_due_detail"
		var connection = mysql.createConnection({
			host: 'rm-uf6cm0kpb0rm130szo.mysql.rds.aliyuncs.com',
			user: 'pptang_123',
			password: 'E8b9J7TjPs0u4Nf',
			port: '3306'
		});

		connection.connect();
		connection.query('use ' + DATABASE);
		connection.query('select * from ' + TABLE, function(error, results, fields) {
			if (error) {
				throw error;
			}
			if (results) {
				// for (var i = 0; i < results.length; i++) {
				// 	console.log('%s\t%s', results[i].name, results[i].end_time);
				// }
				// console.log('%s\t%s', results[1].user_id, results[1].repay_id);
				console.log(results);
			}
		});

		connection.end();

	}
};
