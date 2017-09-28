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
var projectName = "VIP专属";
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
    let sql3 = "select q.title,p.due_capital,p.add_time from "+ userDB_user +".s_project q, "+ userDB_user +".s_user_due_detail p where p.project_id=q.id and p.user_id= " + userInfo.id + " and q.title like '%" + projectName +"%';"
    let sql4 = "select * from ppmiao_test.s_user_due_detail where add_time > '2017-10-10 00:00:00.000000' and user_id= " + userInfo.id + ";";
    let sql5 = "select lottery_award_id from "+ userDB_user +".s_lottery_log p, "+ userDB_user + ".s_lottery_base s where  p.user_id= "+userInfo.id +" and s.id = p.lottery_id and s.key_name = 'october_vip'"
    console.log(sql1);
    console.log(sql2);
    console.log(sql3);
    console.log(sql4);
    console.log(sql5);
    query(sql1 + sql2 + sql3 +sql4+sql5, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      let awardid = 0;
      if(rows[4][0] != undefined){
          awardid = rows[4][0]['lottery_award_id'];
      }else {
          awardid = false;
      }
      if(rows[0][0] != undefined && rows[1][0] != undefined){
          response.send({project_id: rows[0][0]['id'], vipLevel: rows[1][0]['vip_level'],
          VIPInvite: rows[2][0] != undefined, isInvite: rows[3][0] != undefined, isexchange: awardid});
      }else if(rows[0][0] == undefined && rows[1][0] != undefined){
          response.send({project_id: null, vipLevel: rows[1][0]['vip_level'],
          VIPInvite: rows[2][0] != undefined, isInvite: rows[3][0] != undefined, isexchange: awardid});
      }else if(rows[0][0] != undefined && rows[1][0] == undefined){
          response.send({project_id: rows[0][0]['id'], vipLevel: 0,
          VIPInvite: rows[2][0] != undefined, isInvite: rows[3][0] != undefined, isexchange: awardid});
      }else {
          response.send({project_id: null, vipLevel: 0,
          VIPInvite: 0, isInvite: 0, isexchange: 0});
      }
    });
  }
};
