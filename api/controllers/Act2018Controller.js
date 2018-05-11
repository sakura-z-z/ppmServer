/**
 * Act2018Controller
 *
 * @description :: Server-side logic for managing act2018s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	// 春日植树大作战（2018.4.9-2018.4.11）
	treePlantingActivity2018: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token),
			 action: request.body.action
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/treePlantingActivity2018',data);
	},
	// 十二星座展示接口
	AstrologyGiftActivity2018Info: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/AstrologyGiftActivity2018Info',data);
	},
	//十二星座领取礼包接口
	AstrologyGiftActivity2018Send: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/AstrologyGiftActivity2018Send',data);
	},
	//春风拾礼“筝”金记(2018.4.16-2018.4.18)
	flyKiteActivity2018: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/flyKiteActivity2018',data);
	},
	//夺宝联盟探险记(2018.4.23-2018.4.25)
	adventureAlliance2018: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/adventureAlliance2018',data);
	},
	//争做五一“薪”劳模(2018.4.30-2018.5.2)
	laborDayActivity2018: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/laborDayActivity2018',data);
	},
	//五月会员活动(2018.5.10)
	mayVipActivity2018Info: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/mayVipActivity2018Info',data);
	},
	mayVipActivity2018Exchange: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token),
			 amount: request.body.amount
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/mayVipActivity2018Exchange',data);
	},
	//微笑日活动（钱包君升值记2018.5.7-2018.5.9）
	smileActivity2018: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/smileActivity2018',data);
	},
	//复活红包（复活吧！新手红包 2018.5.12-2018.5.31）
	noviceRedResurrection: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/noviceRedResurrection2018',data);
	},
	noviceRedResurrection2018: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token),
			 amount: request.body.amount
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/noviceRedResurrection2018',data);
	},
	// 518财富节 （2018.5.14-2018.5.18）
	// 战队展示接口
	//查询活动是否在活动范围内
	fortuneFestival2018ActivityTime: function(request, response, callback) {
		 var data = querystring.stringify({});
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/fortuneFestival2018ActivityTime',data);
	},
	//队长邀请接口
	fortuneFestival2018TeamInvite: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token),
			 mobile: request.body.mobile
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/fortuneFestival2018TeamInvite',data);
	},
	//被邀请人接受邀请接口
	fortuneFestival2018TeamAccept: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token),
			 teamId: request.body.teamId
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/fortuneFestival2018TeamAccept',data);
	},
	//建立战队接口
	fortuneFestival2018Teamfound: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token),
			 teamName: request.body.teamName
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/fortuneFestival2018Teamfound',data);
	},
	//战队展示
	fortuneFestival2018TeamInfo: function(request, response, callback) {
		console.log(1);
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/fortuneFestival2018TeamInfo',data);
	},
	// 兑换展示接口
	fortuneFestival2018ExchangeInfo: function(request, response, callback) {
		console.log(1);
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token)
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/fortuneFestival2018ExchangeInfo',data);
	}
};
