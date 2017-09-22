/**
 * SalaryController
 *
 * @description :: Server-side logic for managing salaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var querystring = require('querystring');
 module.exports = {
 	getMonthlyInterestConfig: function(request, response, callback) {
 		var data = querystring.stringify({
 		});
 		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getMonthlyInterestConfig.json', data);
 	},
 	getUserMonthlyProjectInvestLog: function(request, response, callback) {
		if(request.body.dev == undefined ){
			var data = querystring.stringify({
	 			token: request.body.token
	 		});
		} else {
			var data = querystring.stringify({
				token: GlobalMethods.tokenDes(request.body.token)
			});
		}
 		GlobalMethods.httpPost(request, response, callback,GlobalVal.apiHost, '/activity/getUserMonthlyProjectInvestLog.json', data);
 	},
 };
