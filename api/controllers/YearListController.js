/**
 * YearListController
 *
 * @description :: Server-side logic for managing yearlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	getYearListphp: function(request, response, callback) {
		var data = querystring.stringify({
			mobile: request.body.mobile
		});
		console.log(GlobalVal.apiHost); //--------
		// GlobalMethods.httpPostPHP(request, response, callback, GlobalVal.apiHost, '/admin.php/AnnualBill/bill', data);
		GlobalMethods.httpPostPHP(request, response, callback, 'cg.pro.ppmiao.cn', '/admin.php/AnnualBill/bill', data);
	},
};
