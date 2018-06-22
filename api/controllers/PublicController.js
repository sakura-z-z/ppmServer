/**
 * PublicController
 *
 * @description :: Server-side logic for managing Publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	getLotteryLogByLotteryAwardId: function(request, response, callback) {
      var data = querystring.stringify({lotteryAwardId: request.body.lotteryAwardId, mobile: request.body.mobile});
      console.log(GlobalVal.apiHost);
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/getLotteryLogByLotteryAwardId.htm', data);
  },
	checkActivity: function(request, response, callback) {
       var data = querystring.stringify({keyName: request.body.keyName});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/checkActivty.json', data);
   },
	getCashCouponByKeyName: function(request, response, callback) {
       var data = querystring.stringify({
				 token: GlobalMethods.tokenDes(request.body.token),
				 keyName: request.body.keyName
			 });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getCashCouponByKeyName', data);
   },
	 exchangeAward: function(request, response, callback) {
       var data = querystring.stringify({
				 lotteryAwardId: request.body.lotteryAwardId,
				 expdate: request.body.expdate,
				 mobile: request.body.mobile,
				 times: request.body.times
			 });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/exchangeAward.htm', data);
     },
     exchangePrize: function(request, response, callback) {
       if (request.body.dev != undefined) {
         var data = querystring.stringify({token: request.body.token, keyName: request.body.keyName, versionName: request.body.versionName});
       } else {
         var data = querystring.stringify({
           token: GlobalMethods.tokenDes(request.body.token),
           keyName: request.body.keyName,
           versionName: request.body.versionName
         });
       }
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/lottery.json', data);
     },
	 getCurryTimes: function(request, response, callback) {
        var data = querystring.stringify({});
        console.log(GlobalVal.apiHost);
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/getCurryTimes.htm', data);
      },
     getPlatformData: function(request, response, callback) {
       var data = querystring.stringify({});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/getPlatformData.json', data);
     },
     getInviteStatistic: function(request, response, callback) {
       var data = querystring.stringify({
		   token: GlobalMethods.tokenDes(request.body.token),
		   awardId: request.body.awardId,
           activityKey: request.body.activityKey,
           amtPerInvest: request.body.amtPerInvest,
           newPreferential: request.body.newPreferential,
	   });
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getInviteStatistic.json', data);
     },
	 //app跳转路径
	 getAppStartupConfig: function(request, response, callback) {
	   var data = querystring.stringify({
		 versionName: request.body.versionName
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getAppStartupConfig.json',data);
	 },
	 //抽奖接口
	 lottery: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/lottery.json',data);
	 },
	 //获取积分
	 getJFValue: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token)
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getJFValue.json',data);
	 },
	 //抽奖日志查询接口
	 getExchangeLog: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			lotteryAwardId: request.body.lotteryAwardId
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getExchangeLog.json',data);
	 },
	 //活动区间内领取日志查询接口
	 getExchangeLogByKeyName: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getExchangeLogByKeyName.json',data);
	 },
	 isFirstOpen: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName,
			times: request.body.times
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/isFirstOpen.json',data);
	 },
	 // 兑换奖励的接口
	 ExChangeAwards: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			lotteryAwardId: request.body.lotteryAwardId,
			expTime: request.body.expTime,
			times: request.body.times,
			value: request.body.value
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/exchangeAward',data);
	 },
	 // 兑换现金券的接口
	 exchangeGLCashAward: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			times: request.body.times
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/exchangeGLCashAward',data);
	 },
	 //兑换奖品的地址接口
	 awardAddress: function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			mobile: request.body.mobile,
			address: request.body.address,
			awardLogIds: request.body.awardLogIds,
			lotteryId: request.body.lotteryId,
			actionIn: request.body.actionIn,
			realName: request.body.realName
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/awardAddress',data);
	 },
	 //获取活动期间前几名投资人
	 getRankingTop: function(request, response, callback) {
		 var token0='';
		 if(request.body.token==''){
		 	token0='';
		}else {
			token0=GlobalMethods.tokenDes(request.body.token);
		}
		 var data = querystring.stringify({
			 token: token0,
			 keyName: request.body.keyName,
			 top: request.body.top,
			 durationDay: request.body.durationDay,
			 newPreferentialIn: request.body.newPreferentialIn,
			 paymentFlag: request.body.paymentFlag
		 });
		 // console.log(GlobalVal.apiHost);
		 GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getRanking', data);
	 },
	 //获取活动期间前几名投资人(新)
	getRankingTop2: function(request, response, callback) {
		var token0='';
		if(request.body.token==''){
		 token0='';
	 }else {
		 token0=GlobalMethods.tokenDes(request.body.token);
	 }
		var data = querystring.stringify({
			token: token0,
			keyName: request.body.keyName,
			top: request.body.top,
			durationDay: request.body.durationDay,
			newPreferentialIn: request.body.newPreferentialIn,
			paymentFlag: request.body.paymentFlag,
			liveTime: request.body.liveTime
		});
		// console.log(GlobalVal.apiHost);
		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getRankingV2', data);
	},
	 // 兑奖V2接口 自定义兑奖接口 可整合现金券， 自定义红包、现金券、加息券金额 ， 自定义红包、加息券过期时间
	 exchangeAwardV2:function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			expTime: request.body.expTime,
			lotteryAwardId: request.body.lotteryAwardId,
			times: request.body.times,
			value: request.body.value
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/exchangeAwardV2',data);
	 },
	 // 兑奖V3接口 自定义兑奖接口 可整合现金券， 自定义红包、现金券、加息券金额 ， 自定义红包、加息券过期时间
	 exchangeAwardV3:function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			expTime: request.body.expTime,
			lotteryAwardId: request.body.lotteryAwardId,
			times: request.body.times,
			value: request.body.value
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/exchangeAwardV3',data);
	 },
	 // 批量发一个KeyName下的所有奖励 如果value = 0 红包 加息券 现金券 的amount为数据库值  否则 value 替换 amount
	 lotteryAllAward:function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName,
			expTime: request.body.expTime,
			value: request.body.value
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/lotteryAllAward.json',data);
	 },
	 // 通过KeyName获取用户当前活动的投资接口
	 getInvDetailByKeyName:function(request, response, callback) {
	   var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName,
			duration: request.body.duration,
			newPreferential: request.body.newPreferential,
			amount: request.body.amount
	   });
		  GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getInvDetailByKeyName',data);
	 },
	 // 通过KeyName获取当前活动的主要信息 ( award==1的时候获取奖品数据,否则不获取奖品数据  isTime: 1活动未开始  2活动中  3活动已结束)
	 getActivityDate:function(request, response, callback) {
	   var data = querystring.stringify({
			keyName: request.body.keyName,
			award: request.body.award
	   });
		 GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getActivityDate',data);
	 },
};
