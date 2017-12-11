/**
 * WechatCapitalController
 用户资金充值提现等功能
 *
 */

 var querystring = require('querystring');

 module.exports = {
   //提现的时候弹出的信息
 	 preWithdrawal: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token,
        userId: request.body.userId
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/preWithdrawal.json',data);
   },
  //  提现说明
  getAppConstant: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId,
       consKey: request.body.consKey
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getAppConstant.json',data);
  },
   //提现获取手机验证码 充值页面获取手机验证码
  getTradeSmsCode: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getTradeSmsCode.json',data);
  },
  //确认提现
  withdrawal: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId,
       msgCode: request.body.msgCode,
       amount: request.body.amount
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/withdrawal.json',data);
  },
  //充值页面数据
  preRecharge: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/preRecharge.json',data);
  },
  // 立即充值
  recharge: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId,
       msgCode: request.body.msgCode,
       amount: request.body.amount
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/recharge.json',data);
  }
 }
