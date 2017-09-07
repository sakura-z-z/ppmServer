var CryptoJS = require("crypto-js");
var http = require('http');
var querystring = require('querystring');
const mysql = require("mysql"); //调用MySQL模块
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
var query = require('../models/pool');
var test = function () {

};
// var redis = require('redis'),
//     RDS_PORT = 6379,        //端口号
//     RDS_HOST = 'r-uf678e1e6a9deeb4.redis.rds.aliyuncs.com',    //服务器IP
//     RDS_PWD = 'Aa311512',
//     RDS_OPTS = {},            //设置项
//     client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

module.exports = {
  connectRedis: function(key,token) {
      console.log(key);
      console.log(token);
    var redis = require('redis'),
      RDS_PORT = 6379, //端口号
      RDS_HOST = 'r-uf678e1e6a9deeb4.redis.rds.aliyuncs.com', //服务器IP
      RDS_PWD = 'Aa311512',
      RDS_OPTS = {}, //设置项
      client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
    client.auth(RDS_PWD, function() {
      console.log('通过认证');
    });
    // var redis = require('redis'),
    // RDS_PORT = 6379,        //端口号
    // RDS_HOST = 'localhost',    //服务器IP
    // RDS_OPTS = {},            //设置项
    // client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);
    // client.on('ready', function(res) {
    //   console.log('ready');
    // });
    client.on('connect', function() {
        client.get(key, function(err, reply) {
          // 当未传入key时会返回null
          console.log(reply);
          if (reply == token){
              return true;
          } else {
              return false;
          }
        });
    });
    client.on("error", function(error) {
      console.log(error);
    });
  }
};
