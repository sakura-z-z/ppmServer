/**
 * LinkSqlController
 *
 * @description :: Server-side logic for managing Linksqls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
var async = require('async');
var query = require('../models/pool');
module.exports = {
    tokenExpire: function(request, response, callback) {
        let token = '';
        if (request.body.dev != undefined) {
            token = request.body.token;
        } else {
            token = GlobalMethods.tokenDes(request.body.token);
        }
        console.log(token);
        GlobalMethods.getUser(request, response, callback, token);
    },
    getDueCapital: function(request, response, callback) {
		// if (GlobalMethods.getUser(request, response, callback) == false) {
		// 	return false;
		// }
		// let userId = GlobalMethods.getUser(request, response, callback).id;
		let userId = 66340;
		let startTime = "'2017-07-12 00:00:00'";

		const TABLE = "s_user_due_detail";
		query("use ppmiao_test;select sum(due_capital) from " + TABLE + " where user_id = " + userId + " and start_time > " + startTime, function(error, results, fields) {
			if (error) {
				throw error;
			}
			if (results) {
                console.log(results);
				response.send({dueCapital: results[1][0]['sum(due_capital)']});
			}
		});
	}
};
