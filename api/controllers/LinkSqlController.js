/**
 * LinkSqlController
 *
 * @description :: Server-side logic for managing Linksqls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
var async = require('async');
var mysql = require("mysql"); //调用MySQL模块
module.exports = {
  tokenExpire: function(request, response, callback) {
      let token = ''
      if (request.body.dev != undefined) {
          token = request.body.token;
      } else {
          token = GlobalMethods.tokenDes(request.body.token);
      }
    GlobalMethods.getUser(request, response, callback, token);
  }
};
