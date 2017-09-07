var CryptoJS = require("crypto-js");
var http = require('http');
var querystring = require('querystring');
const mysql = require("mysql"); //调用MySQL模块
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
var query = require('../models/pool');
// var redis = require('redis'),
//     RDS_PORT = 6379,        //端口号
//     RDS_HOST = 'r-uf678e1e6a9deeb4.redis.rds.aliyuncs.com',    //服务器IP
//     RDS_PWD = 'Aa311512',
//     RDS_OPTS = {},            //设置项
//     client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

module.exports = {
  connectRedis: function() {
      var redis = require('redis'),
          RDS_PORT = 6379,        //端口号
          RDS_HOST = 'r-uf678e1e6a9deeb4.redis.rds.aliyuncs.com',    //服务器IP
          RDS_PWD = 'Aa311512',
          RDS_OPTS = {},            //设置项
          client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);
    client.on('ready', function(res) {
      console.log('ready');
    });
    client.on('connect', function() {
      client.set('author', 'lcx', redis.print);
      client.get('ppmiao_uid_66674', redis.print);
      console.log('connect');
    });
    client.on("error", function(error) {
      console.log(error);
    });
  }
};
