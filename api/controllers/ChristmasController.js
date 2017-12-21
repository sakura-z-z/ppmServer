/**
 * ChristmasController
 *
 * @description :: Server-side logic for managing Christmas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var querystring = require('querystring');
module.exports = {
	getChristmasAward: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			duration: request.body.duration,
			amount: request.body.amount
		});
		console.log(GlobalVal.apiHost);
		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getChristmasAward.json', data);
	},
};
