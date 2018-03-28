/**
 * FoolDay2018Controller
 *
 * @description :: Server-side logic for managing foolday2018s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var querystring = require('querystring');
module.exports = {
	foolDayActivity2018: function(request, response, callback) {
		 var data = querystring.stringify({
			 token: GlobalMethods.tokenDes(request.body.token),
			 action: request.body.action
		 });
			GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/foolDayActivity2018',data);
	}
};
