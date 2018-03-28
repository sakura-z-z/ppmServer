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
		   amount: request.body.amount
		 });
     GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/exchangeTeamInvest.json', data);
  },
	invitationUpdateActivity: function(request, response, callback) {
    var data = querystring.stringify({
		   token: GlobalMethods.tokenDes(request.body.token)
		});
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost,'/ppmiao-award/invitationUpdateActivity', data);
  }
};
