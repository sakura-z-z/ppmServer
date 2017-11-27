/**
 * InvitController
 *
 * @description :: Server-side logic for managing Invits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	exchangeTeamInvest: function(request, response, callback) {
       var data = querystring.stringify({
		   lotteryAwardId: request.body.lotteryAwardId,
		   token: GlobalMethods.tokenDes(request.body.token),
		   amout: request.body.amout});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/exchangeTeamInvest.json', data);
     }
};
