/**
 * poordayController
 *
 */

 var querystring = require('querystring');
 module.exports = {
 	getUserPovertyInvestLog: function(request, response, callback) {
       var data = querystring.stringify({token: GlobalMethods.tokenDes(request.body.token)});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getUserPovertyInvestLog.json', data);
     }
 };
