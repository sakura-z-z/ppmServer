/**
 * BindCardController
 *
 * @description :: Server-side logic for managing bindcards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
  getBanklist: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllBindCardInfo.json', data);
  },
};
