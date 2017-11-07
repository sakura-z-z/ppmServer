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
   //提现获取手机验证码
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
  }
 }
