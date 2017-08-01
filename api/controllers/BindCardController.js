/**
 * BindCardController
 *
 * @description :: Server-side logic for managing bindcards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
module.exports = {
  getBanklist: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        versionName: request.body.versionName
      });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token)
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllBindCardInfo.json', data);
  },
  updateMainBankCard: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        bankId: request.body.bankId,
        versionName: request.body.versionName
      });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        bankId: request.body.bankId
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/updateMainBankCard.json', data);
  },
  checkUserBindCard: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        versionName: request.body.versionName
      });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token)
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/checkUserBindCard.json', data);
  }
};
