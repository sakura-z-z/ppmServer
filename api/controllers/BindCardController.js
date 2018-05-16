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
  // v2.9 绑卡+重新绑卡
  bindCardV2: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token,
      realName: request.body.realName,
      cardNo: request.body.cardNo,
      source: request.body.source,
      redirectUrl: request.body.redirectUrl
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/bindCardV2.json', data);
  },
  // v2.9 解绑
  unBindCardV2: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token,
      source: request.body.source,
      redirectUrl: request.body.redirectUrl
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/unBindCardV2.json', data);
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
