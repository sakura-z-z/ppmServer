/**
 * PrivilegeController
 *
 * @description :: Server-side logic for managing privileges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
  getPrivilegeInfo: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserMonthlyGift');
  },
  setPrivilegeInfo: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        versionName: request.body.versionName,
        userId: request.body.userId,
        monthlyId: request.body.monthlyId
      });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        userId: request.body.userId,
        monthlyId: request.body.monthlyId
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/claimUserMonthlyGift', data);
  },
  getPrivilegeRecord: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserMonthlyClaimLog');
  },
  getGrowUp: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        versionName: request.body.versionName,
        userId: request.body.userId,
      });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        userId: request.body.userId,
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserGrowRecord', data);
  }
};
