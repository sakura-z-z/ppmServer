/**
 * ShopController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
  getShopInfo: function(request, response, callback) {
    let data = '';
    let version;
    if (request.body.versionName != null) {
        version = request.body.versionName;
        data = querystring.stringify({
            token: GlobalMethods.tokenDes(request.body.token),
            // versionName: request.body.versionName,
            versionName: version,
            userId: request.body.userId,
        });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        userId: request.body.userId,
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getStorePageInfo', data);
  },
  setShopInfo: function(request, response, callback) {
    let data = '';
    let version;
    if (request.body.versionName != null) {
        version = request.body.versionName;
        data = querystring.stringify({
            token: GlobalMethods.tokenDes(request.body.token),
            // versionName: request.body.versionName,
            versionName: version,
            storeId: request.body.storeId,
        });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        storeId: request.body.storeId,
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/exchangeCommodity', data);
  },
  getShopRecord: function(request, response, callback) {
    let data = '';
    let version;
    if (request.body.versionName != null) {
        version = request.body.versionName;
        data = querystring.stringify({
            token: GlobalMethods.tokenDes(request.body.token),
            // versionName: request.body.versionName,
            versionName: version,
            userId: request.body.userId,
        });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        userId: request.body.userId,
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserExchangeLog', data);
  },
  getPhoneRecord: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getLatestExchangeLog');
  }
};
