/**
 * DecemberController
 *
 * @description :: Server-side logic for managing Decembers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var http = require('http');
 var querystring = require('querystring');
 var mysql = require('mysql');
 var moment = require('moment');
 var query = require('../models/pool');
 var production = require('../../config/env/production');
 var development = require('../../config/env/development');
 var projectName = "VIP专属";
module.exports = {
	queryDecMemberActivity: function(request, response, callback) {
	  var data = querystring.stringify({
		  token: GlobalMethods.tokenDes(request.body.token),
	  });
	  console.log(GlobalVal.apiHost);
	  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/queryDecMemberActivity.json', data);
	},
	exchangeDecMemberActivity: function(request, response, callback) {
	  var data = querystring.stringify({
		  token: GlobalMethods.tokenDes(request.body.token),
		   count: request.body.count,
	  });
	  console.log(GlobalVal.apiHost);
	  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/exchangeDecMemberActivity.json', data);
	},
    getUserInfoVip12: function(request, response, callback) {
 	 let keyName = request.body.keyName;
 	 let addTime = request.body.addTime;
      let mocktoken = '';
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
      let tokenArr = token.split("_");
      let userInfo = {
        id: tokenArr[2],
        salt: tokenArr[3]
      };
      let userDB = '';
      if (sails.config.environment === 'production') {
        userDB_member = production.database_Member;
        userDB_user = production.database_User;
      }
      if (sails.config.environment === 'development') {
        userDB_member = development.database_Member;
        userDB_user = development.database_User;
      }
      // 查询当前在售的VIP专属标ID  （例：addTime=20180411100000 即：2018年4月11日上午10点整）
      let sql1 = "SELECT p.id,p.`status` FROM " + userDB_user + ".s_project p WHERE p.title LIKE '%" + projectName + "%' AND p.start_time > SUBDATE(curdate(),case when date_format(curdate(),'%w') < 5 then date_format(curdate(),'%w') + 2 else date_format(curdate(),'%w') - 5 end) AND p.start_time <= SUBDATE(SUBDATE(curdate(),case when date_format(curdate(),'%w') < 5 then date_format(curdate(),'%w') + 2 else date_format(curdate(),'%w') - 5 end),-1);";
      // 查询用户当前VIP等级
      let sql2 = "select vip_level from "+ userDB_member +".s_user_vip_level where uid = "+ userInfo.id +";"
      // 查询用户当月是否投资了VIP专属标
      let sql3 = "select q.title,p.due_capital,p.add_time from "+ userDB_user +".s_project q, "+ userDB_user +".s_user_due_detail p where p.project_id=q.id and p.user_id= " + userInfo.id + " and q.title like '%" + projectName +"%' and p.add_time >  '" + addTime + "';"
      console.log(sql1);
      console.log(sql2);
      console.log(sql3);
      query(sql1 + sql2 + sql3, function(err, rows, fields) {
          console.log(rows);
        if (err) {
          console.log('[query] - :' + err);
          return;
        }

        if(rows[0][0] != undefined && rows[1][0] != undefined){
            response.send({
                project_id: rows[0][0]['id'],
                project_status:rows[0][0][`status`],
                vipLevel: rows[1][0]['vip_level'],
                VIPInvite: rows[2][0] != undefined
            });
        }else if(rows[0][0] == undefined && rows[1][0] != undefined){
            response.send({
                project_id: null,
                project_status:null,
                vipLevel: rows[1][0]['vip_level'],
                VIPInvite: rows[2][0] != undefined
            });
        }else if(rows[0][0] != undefined && rows[1][0] == undefined){
            response.send({
                project_id: rows[0][0]['id'],
                project_status:rows[0][0][`status`],
                vipLevel: 0,
                VIPInvite: rows[2][0] != undefined
            });
        }else {
            response.send({
                project_id: null,
                project_status:null,
                vipLevel: 0,
                VIPInvite: 0
            });
        }
      });
    }
};
