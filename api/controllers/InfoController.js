/**
 * InfoController
 *
 * @description :: Server-side logic for managing Infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  getHomeInfo: function(request, response, callback) {
      let body = "UxJ2OvFpmEZszHlgRhU3CmjMjBSxT1aWvn6FKL+L518=\n"
    console.log(GlobalMethods.responseReleaseToken(body));
    // GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getVipHomepageBean');
  },
  getIntegral: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserMissionLog');
  },
  getIntegralMession: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getAllJfTasks');
  }
};
