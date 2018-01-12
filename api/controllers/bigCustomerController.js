





var querystring = require('querystring');
module.exports = {
	getPeakKingActivityAward: function(request, response, callback) {
       var data = querystring.stringify({
         token: GlobalMethods.tokenDes(request.body.token)
       });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/getPeakKingActivityAward', data);
   }
};
