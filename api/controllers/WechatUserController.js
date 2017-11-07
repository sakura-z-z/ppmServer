/**
 * WechatUserController
 *
 */

 var querystring = require('querystring');

 module.exports = {
   //用户信息
 	 userInfo: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token,
        mobile: request.body.mobile
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/userInfo.json',data);
   },
   //账户信息
 	 userAccountAssets: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/userAccountAssets.json',data);
   },
   //账户红点
   redPointV2: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token,
        userId: request.body.userId
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/redPointV2.json',data);
   },
//投资记录

   //投资中
   queryInvestDetailV2: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token,
        pageNo: request.body.pageNo,
        userId: request.body.userId
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/queryInvestDetailV2.json',data);
   },
  //投资结束
  queryInvestFinishDetailV2: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       pageNo: request.body.pageNo,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/queryInvestFinishDetailV2.json',data);
  },
  //投资详情
  dueDetail: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       investDetailId: request.body.investDetailId,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/dueDetail.json',data);
  },
//我的券包
  //券包红点
  checkNewCoupon: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/checkNewCoupon.json',data);
  },
  //红包券
  getAllUserRedEnvelope: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllUserRedEnvelope.json',data);
  },
  //加息券
  getAllUserInterestCoupon: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllUserInterestCoupon.json',data);
  },
  //现金券
  getAllUserInviteCashCoupons: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllUserInviteCashCoupons.json',data);
  },
  // 使用现金券
  CashCouponToWallet: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       userId: request.body.userId,
       cashCouponId:request.body.cashCouponId
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/CashCouponToWallet.json',data);
  }
 };























// 00
