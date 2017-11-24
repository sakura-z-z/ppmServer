/**
 * HalloweenController
 *
 * @description :: Server-side logic for managing halloweens
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var moment = require('moment');
var query = require('../models/pool');
var production = require('../../config/env/production');
var development = require('../../config/env/development');
module.exports = {
	getHalloween: function(request, response, callback) {
		let mocktoken = ''
		if (request.body.dev != undefined) {
			mocktoken = request.body.token;
		} else {
			mocktoken = GlobalMethods.tokenDes(request.body.token);
		}
		let token = GlobalMethods.base64decode(mocktoken);
		if (token == '') {
			response.send('token解析失败');
			return;
		}
		const tokenArr = token.split("_");
		const userInfo = {
			id: tokenArr[2],
			salt: tokenArr[3]
		};
		let key = 'ppmiao_uid_' + userInfo.id;
		 GlobalMethods2.connectRedis(key, mocktoken, function(result) {
		   if (!result) {
		     response.send({code: "1", result: '您的登陆状态已失效'});
		     return;
		   } else {
		let userDB = '';
		let userMB = '';
		if (sails.config.environment === 'production') {
			userDB = production.database_User;
			userMB = production.database_Member;
		}
		if (sails.config.environment === 'development') {
			userDB = development.database_User;
			userMB = development.database_Member;
		}

		let sqlTime = "select start_time,end_time from  " + userDB + ".s_lottery_base where key_name='halloween';";
		let startTime = '2017-11-01 0:0:0.0';
		let endTime = '2017-11-02 23:59:59.0';
		let endTimeAfter = '2017-11-03 23:59:59.0';
		query(sqlTime, function(err, rows, fields) {
			console.log(rows[0]);
			if (err) {
				console.log('[query] - :' + err);
				return;
			}
			if (rows[0] != undefined) {
				startTime = moment(rows[0].start_time * 1000).format('YYYY-MM-DD HH:mm:ss');
				endTime = moment(rows[0].end_time * 1000).format('YYYY-MM-DD HH:mm:ss');
				endTimeAfter = moment(rows[0].end_time * 1000+1000*60*60*24).format('YYYY-MM-DD HH:mm:ss');
				let sql1 = 'select count(*) from (select * from ' + userMB + '.s_user_daily_sign p where p.uid=' + userInfo.id + ') p where EXISTS ( SELECT * FROM ' + userDB + '.s_lottery_base slb WHERE slb.key_name = "halloween" AND p.add_time BETWEEN FROM_UNIXTIME(slb.start_time) AND FROM_UNIXTIME(slb.end_time));';
				let sql2 = 'select count(*) from ' + userMB + '.s_user_daily_sign p where p.uid=' + userInfo.id + ' and p.add_time>=date_format(now(),"%y-%m-%d");';
				let sql3 = "SELECT count(*) FROM " + userDB + ".s_user_due_detail s WHERE s.user_id IN ( SELECT suil.invited_user_id FROM " + userDB + ".s_user_invite_list suil WHERE suil.user_id = "+ userInfo.id +" AND suil.type = 2 AND suil.add_time BETWEEN FROM_UNIXTIME(1509465600) AND FROM_UNIXTIME(1509638399)) AND s.due_capital >= 5000 AND EXISTS ( SELECT * FROM " +userDB+ ".s_lottery_base slb WHERE slb.key_name = 'halloween' AND s.add_time BETWEEN FROM_UNIXTIME(slb.start_time) AND FROM_UNIXTIME(slb.end_time));";
				let sql4 = 'SELECT count(*) FROM ' + userDB + '.s_user_due_detail s WHERE s.user_id = ' + userInfo.id + ' AND s.duration_day >= 60 AND s.due_capital >= 10000 AND s.due_capital < 100000 AND EXISTS ( SELECT * FROM s_lottery_base slb WHERE slb.key_name = "halloween" AND s.add_time BETWEEN FROM_UNIXTIME(slb.start_time) AND FROM_UNIXTIME(slb.end_time)) AND EXISTS ( SELECT * FROM s_project sp WHERE s.project_id = sp.id AND sp.new_preferential <> 1 );';
				let sql5 = 'SELECT count(*) FROM ' + userDB + '.s_user_due_detail s WHERE s.user_id = ' + userInfo.id + ' AND s.duration_day >= 90 AND s.due_capital >= 100000 AND EXISTS ( SELECT * FROM s_lottery_base slb WHERE slb.key_name = "halloween" AND s.add_time BETWEEN FROM_UNIXTIME(slb.start_time) AND FROM_UNIXTIME(slb.end_time)) AND EXISTS ( SELECT * FROM s_project sp WHERE s.project_id = sp.id AND sp.new_preferential <> 1 );';
				// console.log(sql1);
				// console.log(sql2);
				// console.log(sql3);
				// console.log(sql4);
				// console.log(sql5);

				query(sql1 + sql2 + sql3 + sql4 + sql5, function(err, rows, fields) {
					if (err) {
						console.log('[query] - :' + err);
						return;
					}
					// console.log(rows);
					if (rows[0][0] != '' && rows[1][0] != '' && rows[2][0] != '' && rows[3][0] != '' && rows[4][0] != '') {
						var signCount = 0;
						var todaySign = 0;
						var inviteCount = 0;
						var bigSixty = 0;
						var bigNinety = 0;
 						if (rows[0][0] != undefined) {
							signCount = rows[0][0]['count(*)'];
						}
						if (rows[1][0] != undefined) {
							todaySign = rows[1][0]['count(*)'];
						}
						if (rows[2][0] != undefined) {
							inviteCount = rows[2][0]['count(*)'];
						}
						if (rows[3][0] != undefined) {
							bigSixty = rows[3][0]['count(*)'];
						}
						if (rows[4][0] != undefined) {
							bigNinety = rows[4][0]['count(*)'];
						}
						response.send({
							code: "0",
							result: {
								startTime: startTime,
								endTime: endTime,
								endTimeAfter: endTimeAfter,
								signCount: signCount,
								todaySign: todaySign,
								inviteCount: inviteCount,
								bigSixty: bigSixty,
								bigNinety: bigNinety
							}
						});
					} else {
						response.send({
							code: "0",
							result: {
								startTime: startTime,
								endTime: endTime,
								endTimeAfter: endTimeAfter,
								signCount: 0,
								todaySign: 0,
								inviteCount: 0,
								bigSixty: 0,
								bigNinety: 0
							}
						});
					}
				});
				   } else {
				     response.send({code: "2", result: '服务端忙'});
				   }
				 });
			}
		});

	}
}
