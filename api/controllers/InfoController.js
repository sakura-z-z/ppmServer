/**
 * InfoController
 *
 * @description :: Server-side logic for managing Infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  getHomeInfo: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getVipHomepageBean');
  },
  getIntegral: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserMissionLog');
  },
  getIntegralMession: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getAllJfTasks');
  }
};
