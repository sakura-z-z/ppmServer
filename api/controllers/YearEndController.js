/**
 * YearEndController
 *
 * @description :: Server-side logic for managing Yearends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	addGroup: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName,
			groupId: request.body.groupId
		});
		console.log(GlobalVal.apiHost);
		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/addGroup.json', data);
	},
	getGroup: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName
		});
		console.log(GlobalVal.apiHost);
		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getGroup.json', data);
	}
};
