/**
 * ValentineController
 *
 * @description :: Server-side logic for managing Valentines
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var querystring = require('querystring');
module.exports = {
	getAwards: function(request, response, callback) {
		var data = querystring.stringify({
			keyName: request.body.keyName
		});
		GlobalMethods.httpPost(request, response, callback,GlobalVal.apiHost, '/ppmiao-rest/payment/activity/inviteFriend/getAwards.htm', data);
	},
	getMagpieProjects: function(request, response, callback) {
		var data = querystring.stringify({
			title: request.body.title
		});
		GlobalMethods.httpPost(request, response, callback,GlobalVal.apiHost, '/ppmiao-rest/payment/activity/inviteFriend/getMagpieProjects.htm', data);
	},
};
