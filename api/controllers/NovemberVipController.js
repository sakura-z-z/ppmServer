/**
 * NovemberVipController
 *
 * @description :: Server-side logic for managing Novembervips
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
   getUserInfoVip: function(request, response, callback) {
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
     let sql1 = "select p.id,p.`status` from " + userDB_user + ".s_project p where p.title like '%" + projectName + "%' and p.start_time>subdate(curdate(),date_format(curdate(),'%w')-5) and p.start_time<=subdate(curdate(),date_format(curdate(),'%w')-6);"
     let sql2 = "select vip_level from "+ userDB_member +".s_user_vip_level where uid = "+ userInfo.id +";"
     let sql3 = "select q.title,p.due_capital,p.add_time from "+ userDB_user +".s_project q, "+ userDB_user +".s_user_due_detail p where p.project_id=q.id and p.user_id= " + userInfo.id + " and q.title like '%" + projectName +"%';"
     let sql4 = "select * from " + userDB_user + ".s_user_due_detail where add_time > '" + addTime + "' and user_id= " + userInfo.id + ";";
    //  console.log(sql1);
    //  console.log(sql2);
    //  console.log(sql3);
    //  console.log(sql4);
     query(sql1 + sql2 + sql3 + sql4, function(err, rows, fields) {
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
               VIPInvite: rows[2][0] != undefined,
               isInvite: rows[3][0] != undefined
           });
       }else if(rows[0][0] == undefined && rows[1][0] != undefined){
           response.send({
               project_id: null,
               project_status:null,
               vipLevel: rows[1][0]['vip_level'],
               VIPInvite: rows[2][0] != undefined,
               isInvite: rows[3][0] != undefined
           });
       }else if(rows[0][0] != undefined && rows[1][0] == undefined){
           response.send({
               project_id: rows[0][0]['id'],
               project_status:rows[0][0][`status`],
               vipLevel: 0,
               VIPInvite: rows[2][0] != undefined,
               isInvite: rows[3][0] != undefined
           });
       }else {
           response.send({
               project_id: null,
               project_status:null,
               vipLevel: 0,
               VIPInvite: 0,
               isInvite: 0
           });
       }
     });
   }
 };
