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
// RDS_PORT = 6379,        //端口号
// RDS_HOST = 'localhost',    //服务器IP
// RDS_OPTS = {},            //设置项
// client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);
// client.on('ready', function(res) {
//   console.log('ready');
// });
var production = require('../../config/env/production');
var development = require('../../config/env/development');
module.exports = {
  connectRedis: function(key,token,callback) {
      console.log(key);
      console.log(token);
      if (sails.config.environment === 'development') {
          var redis = require('redis'),
            RDS_PORT = 6379, //端口号
            RDS_HOST = development.redisHost, //服务器IP
            RDS_PWD = development.redisPassword,
            RDS_OPTS = {}, //设置项
            client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
      }
      if (sails.config.environment === 'production') {
          var redis = require('redis'),
            RDS_PORT = 6379, //端口号
            RDS_HOST = production.redisHost, //服务器IP
            RDS_PWD = production.redisPassword,
            RDS_OPTS = {}, //设置项
            client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
      }
    client.auth(RDS_PWD, function() {
      console.log('通过认证');
    });
    client.on('connect', function() {
        console.log('连接成功');
        client.get(key, function(err, reply) {
          // 当未传入key时会返回null
          if (reply == token){
              callback(true);
          } else {
              callback(false);
          }
        });
    });
    client.on("error", function(error) {
      callback(error);
    });
  }
};
