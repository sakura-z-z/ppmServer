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
};
