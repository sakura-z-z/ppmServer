/**
 * WechatUserController
 *
 */

 var querystring = require('querystring');

 module.exports = {
   //获取验证码
   getSmsCode: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        mobile: request.body.mobile
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getSmsCode.json',data);
   },
   //登录
   login: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        mobile: request.body.mobile,
        mobile_auth_code:request.body.mobile_auth_code,
        device_type:request.body.device_type,
        channel:request.body.channel,
        registration_id:request.body.registration_id,
        device_serial_id:request.body.device_serial_id,
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/login.json',data);
   },
   //用户信息
 	 userInfos: function(request, response, callback) {
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
      //总资产 收益记录
 	 allWaitInterestDetail: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/allWaitInterestDetail.json',data);
   },
 	 allInterestDetail: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/allInterestDetail.json',data);
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
        //我的消息
    personalMessage: function(request, response, callback) {
     var data = querystring.stringify({
         versionName: request.body.versionName,
         token: request.body.token,
         userId: request.body.userId,
         pageNo:request.body.pageNo
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/personalMessage.json',data);
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
  //交易明细
  tradeDetail: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       type: request.body.type,
       pageNo: request.body.pageNo
     });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/tradeDetail.json',data);
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
  },
  // 账户中心
        // 我的银行卡
    queryBindBankCard: function(request, response, callback) {
       var data = querystring.stringify({
         versionName: request.body.versionName,
         token: request.body.token,
         userId: request.body.userId
       });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/queryBindBankCard.json',data);
    },
            //银行卡列表
    getBankList:function(request, response, callback) {
       var data = querystring.stringify({});
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getBankList.json',data);
    },
          //绑卡开户
    bindCard:function(request, response, callback) {
      var data = querystring.stringify({
        bankCardNo: request.body.bankCardNo,
        bankCode: request.body.bankCode,
        cardNo: request.body.cardNo,
        mobile: request.body.mobile,
        realName: request.body.realName,
        token: request.body.token,
        versionName: request.body.versionName,
        userId: request.body.userId,
        versionName: request.body.versionName
      });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/bindCard.json',data);
    },
          //绑卡确认
    bindCardConfirm:function(request, response, callback) {
      var data = querystring.stringify({
        token: request.body.token,
        realName:request.body.realName,
        cardNo:request.body.cardNo,
        bankCardNo:request.body.bankCardNo,
        mobile:request.body.mobile,
        bankCode:request.body.bankCode,
        originOrderNo:request.body.originOrderNo,
        msgCode:request.body.msgCode,
        versionName: request.body.versionName
      });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/bindCardConfirm.json',data);
    },
        //解卡
    unBindCard:function(request, response, callback) {
      var data = querystring.stringify({
        token: request.body.token,
        versionName: request.body.versionName
      });
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/unBindCard.json',data);
    },
        // 退出登录
    logout: function(request, response, callback) {
       var data = querystring.stringify({
         versionName: request.body.versionName,
         token: request.body.token,
         userId: request.body.userId
       });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/logout.json',data);
    },
        //上传头像
    uploadAvatar: function(request, response, callback) {
       var data = querystring.stringify({
         token: request.body.token,
         file: request.body.file
       });
        GlobalMethods.httpPostForm(request, response, callback, GlobalVal.apiHost, '/user/uploadAvatar.json',data);
    },
    //common
    getAppConstant: function(request, response, callback) {
       var data = querystring.stringify({
         consKey: request.body.consKey
       });
        GlobalMethods.httpPostForm(request, response, callback, GlobalVal.apiHost, 'message/getAppConstant.json',data);
    },
 };























// 00
