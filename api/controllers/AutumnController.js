/**
 * AutumnController
 *
 * @description :: Server-side logic for managing autumns
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
  getinviteAwards: function(request, response, callback) {
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
        let userDB = ''
        if (sails.config.environment === 'production') {
          userDB = production.database_User;
        }
        if (sails.config.environment === 'development') {
          userDB = development.database_User;
        }
        let sqlTime = "select start_time,end_time from  " + userDB + ".s_lottery_base where key_name='autumn_day';";
        let signName = '%金秋%';
        let startTime = '2017-09-10 0:0:0.0';
        let endTime = '2017-09-13 23:59:59.0';
        query(sqlTime, function(err, rows, fields) {
          if (err) {
            console.log('[query] - :' + err);
            return;
          }
          if (rows[0] != undefined) {
            startTime = moment(rows[0].start_time * 1000).format('YYYY-MM-DD HH:mm:ss');
            endTime = moment(rows[0].end_time * 1000).format('YYYY-MM-DD HH:mm:ss');
            let sqlHead = "select total,user_id,case when p.total>=10000 and p.total<30000 then '40元现金券' when p.total>=30000 and p.total<50000 then '120元现金券' when p.total>=50000 and p.total<100000 then CONCAT(round(p.total*5/1000,0),'元现金券') when p.total>=100000 and p.total<300000 then CONCAT(round(p.total*5.5/1000,0),'元现金券') when p.total>=300000 and p.total<500000 then '小米 Pad3' when p.total>=500000 and p.total<800000 then 'iPad +罗技蓝牙键盘' when p.total>=800000 and p.total<1200000 then 'iPhone7' when p.total>=1200000  then 'MacBook Air'  else null end award from ( SELECT SUM(s.due_capital) AS total, s.user_id FROM ";
            let sqlFoot = ' AND p.is_delete = 0 GROUP BY s.user_id ORDER BY sum(s.due_capital)DESC)p'
            let sql = sqlHead + userDB + ".s_project p, " + userDB + ".s_user_due_detail s WHERE p.id = s.project_id and p.title like '" + signName + "' AND s.add_time >= '" + startTime + "' AND s.add_time < '" + endTime + "'  AND s.user_id  =  " + userInfo.id + sqlFoot + ";";
            console.log(sql);
            query(sql, function(err, rows, fields) {
              if (err) {
                console.log('[query] - :' + err);
                return;
              }
              if (rows != '') {
                response.send({code: "0", result: {total: rows[0]['total'], award: rows[0]['award']
                }});
              } else {
                response.send({code: "0", result: {total: 0, award: null}});
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
