/**
 * NationalDayController
 *
 * @description :: Server-side logic for managing nationaldays
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
	calculateRedPackets: function(request, response, callback) {
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
		//  GlobalMethods2.connectRedis(key, mocktoken, function(result) {
		//    if (!result) {
		//      response.send({code: "1", result: '您的登陆状态已失效'});
		//      return;
		//    } else {
		let userDB = ''
		if (sails.config.environment === 'production') {
			userDB = production.database_User;
		}
		if (sails.config.environment === 'development') {
			userDB = development.database_User;
		}
		let sqlTime = "select start_time,end_time from  " + userDB + ".s_lottery_base where key_name='national_day';";
		let startTime = '2017-10-01 0:0:0.0';
		let endTime = '2017-10-07 23:59:59.0';
		let endTimeAfter = '2017-10-08 23:59:59.0';
		let lotteryAwardId1 = request.body.cash01Id;
		let lotteryAwardId2 = request.body.cash02Id;
		let lotteryAwardId3 = request.body.cash03Id;
		query(sqlTime, function(err, rows, fields) {
			// console.log(rows[0]);
			if (err) {
				console.log('[query] - :' + err);
				return;
			}
			if (rows[0] != undefined) {
				startTime = moment(rows[0].start_time * 1000).format('YYYY-MM-DD HH:mm:ss');
				endTime = moment(rows[0].end_time * 1000).format('YYYY-MM-DD HH:mm:ss');
				console.log(endTime);
				endTimeAfter = moment(rows[0].end_time * 1000+1000*60*60*24).format('YYYY-MM-DD HH:mm:ss');
				// console.log(endTimeAfter);

				let sql1 = 'SELECT count(*)-(select count(*) from ' + userDB + '.s_lottery_log p where p.user_id= ' + userInfo.id + ' and p.lottery_award_id=' + lotteryAwardId1 + ') as count, user_id FROM (select p.* from ' + userDB + '.s_user_due_detail p, ' + userDB + '.s_project q where p.project_id=q.id and q.new_preferential!=1 and q.duration>=30 and p.user_id=' + userInfo.id + ') p WHERE p.add_time >= "' + startTime + '" AND p.add_time < "' + endTime + '" AND p.due_capital >= 20000 AND p.due_capital < 30000 GROUP BY user_id ;';
				let sql2 = 'SELECT count(*)-(select count(*) from ' + userDB + '.s_lottery_log p where p.user_id= ' + userInfo.id + ' and p.lottery_award_id=' + lotteryAwardId2 + ') as count, user_id FROM (select p.* from ' + userDB + '.s_user_due_detail p, ' + userDB + '.s_project q where p.project_id=q.id and q.new_preferential!=1 and q.duration>=30 and p.user_id=' + userInfo.id + ') p WHERE p.add_time >= "' + startTime + '" AND p.add_time < "' + endTime + '" AND p.due_capital >= 30000 AND p.due_capital < 50000 GROUP BY user_id ;';
				let sql3 = 'SELECT count(*)-(select count(*) from ' + userDB + '.s_lottery_log p where p.user_id= ' + userInfo.id + ' and p.lottery_award_id=' + lotteryAwardId3 + ') as count, user_id FROM (select p.* from ' + userDB + '.s_user_due_detail p, ' + userDB + '.s_project q where p.project_id=q.id and q.new_preferential!=1 and q.duration>=30 and p.user_id=' + userInfo.id + ') p WHERE p.add_time >= "' + startTime + '" AND p.add_time < "' + endTime + '" AND p.due_capital >= 50000 GROUP BY user_id ;';
				console.log(sql1);
				console.log(sql2);
				console.log(sql3);

				query(sql1 + sql2 + sql3, function(err, rows, fields) {
					if (err) {
						console.log('[query] - :' + err);
						return;
					}
					console.log(rows);
					if (rows[0][0] != '' && rows[1][0] != '' && rows[2][0] != '') {
						var count1 = 0;
						var count2 = 0;
						var count3 = 0;
						if(rows[0][0] != undefined){
							count1 = rows[0][0]['count'];
						}
						if(rows[1][0] != undefined){
							count2 = rows[1][0]['count'];
						}
						if(rows[2][0] != undefined){
							count3 = rows[2][0]['count'];
						}
						response.send({
							code: "0",
							result: {
								startTime: startTime,
								endTime: endTime,
								endTimeAfter: endTimeAfter,
								count1: count1,
								count2: count2,
								count3: count3
							}
						});
					} else {
						response.send({
							code: "0",
							result: {
								startTime: startTime,
								endTime: endTime,
								endTimeAfter: endTimeAfter,
								count1: 0,
								count2: 0,
								count3: 0
							}
						});
					}
				});
				//    } else {
				//      response.send({code: "2", result: '服务端忙'});
				//    }
				//  });
			}
		});

	},
	getProductDetails: function(request, response, callback) {
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
		//  GlobalMethods2.connectRedis(key, mocktoken, function(result) {
		//    if (!result) {
		//      response.send({code: "1", result: '您的登陆状态已失效'});
		//      return;
		//    } else {
		let userDB = ''
		if (sails.config.environment === 'production') {
			userDB = production.database_User;
		}
		if (sails.config.environment === 'development') {
			userDB = development.database_User;
		}
		let sqlTime = "select start_time,end_time from  " + userDB + ".s_lottery_base where key_name='national_day';";
		let startTime = '2017-10-01 0:0:0.0';
		let endTime = '2017-10-07 23:59:59.0';
		query(sqlTime, function(err, rows, fields) {
			if (err) {
				console.log('[query] - :' + err);
				return;
			}
			if (rows[0] != undefined) {
				startTime = moment(rows[0].start_time * 1000).format('YYYY-MM-DD HH:mm:ss');
				endTime = moment(rows[0].end_time * 1000).format('YYYY-MM-DD HH:mm:ss');
				console.log(startTime);
				let sql = 'select q.title,p.due_capital,p.add_time from ' + userDB + '.s_project q,' + userDB + '.s_user_due_detail p where p.project_id=q.id and p.user_id= ' + userInfo.id + ' and q.new_preferential!=1 and q.duration>=30 and p.add_time >= "' + startTime + '" and p.add_time < "' + endTime + '" order by add_time desc;';
				console.log(sql);
				query(sql, function(err, rows, fields) {
					console.log('+++++++++++++++++');
					console.log(rows);
					if (err) {
						console.log('[query] - :' + err);
						return;
					}
					let result = rows.map(function(item,index){
						return {
							title: item['title'],
							dueCapital: item['due_capital'],
							addTime: moment(item['add_time']).format('MM-DD HH:mm')
						}
					})
					if (rows != '') {
						response.send({
							code: "0",
							result: result,
						});
					} else {
						response.send({
							code: "0",
							result: {}
						});
					}
				});
				//    } else {
				//      response.send({code: "2", result: '服务端忙'});
				//    }
				//  });
			}
		});

	}
}
