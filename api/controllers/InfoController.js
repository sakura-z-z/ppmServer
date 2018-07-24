/**
 * InfoController
 *
 * @description :: Server-side logic for managing Infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var querystring = require('querystring');
module.exports = {
  getHomeInfo: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getVipHomepageBean');
  },
  getIntegral: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserMissionLog');
  },
  getUserMissionLogV2: function(request, response, callback) {
    var data = querystring.stringify({
      token: GlobalMethods.tokenDes(request.body.token),
      type: request.body.type,
      size: request.body.size,
      page: request.body.page
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserMissionLogV2',data);
  },
  getIntegralMession: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getAllJfTasks');
  }
};
