/**
 * WomenDayController
 *
 * @description :: Server-side logic for managing womendays
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var querystring = require('querystring');
module.exports = {
	womenDayActivity: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token)
		});
		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/womenDayActivity.json', data);
	}
};
