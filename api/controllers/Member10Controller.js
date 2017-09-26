/**
 * Member10Controller
 *
 * @description :: Server-side logic for managing member10s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var moment = require('moment');
var query = require('../models/pool');
var production = require('../../config/env/production');
var development = require('../../config/env/development');
var projectName = "10月会员";
module.exports = {
  getUserInfoMT: function(request, response, callback) {
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
    let tokenArr = token.split("_");
    let userInfo = {
      id: tokenArr[2],
      salt: tokenArr[3]
    };
    let userDB = ''
    if (sails.config.environment === 'production') {
      userDB_member = production.database_Member;
      userDB_user = production.database_User;
    }
    if (sails.config.environment === 'development') {
      userDB_member = development.database_Member;
      userDB_user = development.database_User;
    }
    let sql1 = "select * from " + userDB_user + ".s_project where is_delete = 0 and `status`=2 and title like '%" + projectName + "%' order by weight + custom_weight desc, start_time asc;";
    let sql2 = "select vip_level from "+ userDB_member +".s_user_vip_level where uid = "+ userInfo.id +";"
    let sql3 = "select q.title,p.due_capital,p.add_time from "+ userDB_user +".s_project q, "+ userDB_user +".s_user_due_detail p where p.project_id=q.id and p.user_id= " + userInfo.id + " and q.title like '%" + projectName +"%'"
    console.log(sql1);
    console.log(sql2);
    console.log(sql3);
    query(sql1 + sql2 + sql3, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      console.log(rows[0][0]['id']);
      console.log(rows[1][0]['vip_level']);
      console.log(rows[2][0]);
      if(rows[0][0]['id'] != undefined && rows[1][0]['vip_level'] != undefined){
          response.send({project_id: rows[0][0]['id'], vipLevel: rows[1][0]['vip_level'], isInvite: rows[2][0] != undefined});
      }else {
          response.send({project_id: null, vipLevel: 0, isInvite: 0});
      }
    });
  }
};
