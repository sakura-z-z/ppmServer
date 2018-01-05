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
	 exchangeAward: function(request, response, callback) {
       var data = querystring.stringify({lotteryAwardId: request.body.lotteryAwardId, expdate: request.body.expdate, mobile: request.body.mobile, times: request.body.times});
       console.log(GlobalVal.apiHost);
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
	 }
};
