/**
 * MainpalaceController
 *
 * @description :: Server-side logic for managing mainpalaces
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var querystring = require('querystring');
module.exports = {
	miaowGrowUpActivity: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			actionIn: request.body.actionIn
		});
		console.log(GlobalVal.apiHost);
		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/miaowGrowUpActivity', data);
	},
};
