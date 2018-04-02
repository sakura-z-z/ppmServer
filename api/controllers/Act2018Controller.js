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
	}
};
