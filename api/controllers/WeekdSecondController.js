/**
 * WeekdSecondController
 *
 * @description :: Server-side logic for managing Weekdseconds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
module.exports = {
  getInvestDoubleJfRecord: function(request, response, callback) {
    var data = querystring.stringify({
      versionName: request.body.versionName,
      token: GlobalMethods.tokenDes(request.body.token),
      // id: request.body.id
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getInvestDoubleJfRecord.json', data);
  }
};
