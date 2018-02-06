
var querystring = require('querystring');
module.exports = {
	newYearEveActivity: function(request, response, callback) {
       var data = querystring.stringify({
         token: GlobalMethods.tokenDes(request.body.token),
				 actionIn: request.body.actionIn,
				 minDue: request.body.minDue,
				 minInvest: request.body.minInvest,
				 rate: request.body.rate
       });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/newYearEveActivity', data);
   }
};
