/**
 * SinglesDayController
 *
 * @description :: Server-side logic for managing Singlesdays
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	getActivityInvestLog: function(request, response, callback) {
       var data = querystring.stringify({ keyName: request.body.keyName,token: GlobalMethods.tokenDes(request.body.token), isNew: request.body.isNew});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getActivityInvestLog.json', data);
     }
};
