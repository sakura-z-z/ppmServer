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
  withdrawalV2: function(request, response, callback) {
     var data = querystring.stringify({
       redirectUrl: request.body.redirectUrl,
       token: request.body.token,
       source: request.body.source,
       amount: request.body.amount
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/withdrawalV2.json',data);
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
  rechargeV2: function(request, response, callback) {
     var data = querystring.stringify({
       redirectUrl: request.body.redirectUrl,
       token: request.body.token,
       source: request.body.source,
       deviceType: request.body.deviceType,
       amount: request.body.amount
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/rechargeV2.json',data);
  },
  // 银行回调页面接口
  deal: function(request, response, callback) {
     var data = querystring.stringify({
       orderNo: request.body.orderNo
     });
     // console.log(request);
     // console.log(response);
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHostTest, '/pretreatment/deal',data,GlobalVal.apiPortTest);
  },
  // 实名认证
  authentication: function(request, response, callback) {
     var data = querystring.stringify({
       token: request.body.token,
       idCode: request.body.idCode,
       realName: request.body.realName
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/authentication.json',data);
  },
  // 修改重置交易密码接口
  setPassWord: function(request, response, callback) {
     var data = querystring.stringify({
       redirectUrl: request.body.redirectUrl,
       token: request.body.token,
       source: request.body.source,
       action: request.body.action
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/setPassWord.json',data);
  },
  // 授权
  authorization: function(request, response, callback) {
     var data = querystring.stringify({
       redirectUrl: request.body.redirectUrl,
       token: request.body.token,
       source: request.body.source
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/authorization.json',data);
  }
}
