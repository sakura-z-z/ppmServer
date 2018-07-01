/**
 * ShopController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
  // 积分商场接口
  getStoreHomePageBean: function(request, response, callback) {
    var data = querystring.stringify({
      token: GlobalMethods.tokenDes(request.body.token)
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/store/getStoreHomePageBean', data);
  },
  // 积分商场 精选活动接口
  getStoreList: function(request, response, callback) {
    var data = querystring.stringify({
      token: GlobalMethods.tokenDes(request.body.token),
      count: request.body.count,
      iconId: request.body.iconId
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/store/getStoreList', data);
  },
  // 会员中心 兑换好礼接口
  getStoreFrontList: function(request, response, callback) {
    var data = querystring.stringify({
      count: request.body.count,
      token: GlobalMethods.tokenDes(request.body.token)
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/store/getStoreFrontList', data);
  },
  // 积分商城 兑换详情
  getCommodityInfo: function(request, response, callback) {
    var data = querystring.stringify({
      storeId: request.body.storeId,
      isKill: request.body.isKill,
      token: GlobalMethods.tokenDes(request.body.token)
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/store/getCommodityInfo', data);
  },
  // 积分商城 兑换商品接口
  exchangeCommodity: function(request, response, callback) {
    var data = querystring.stringify({
      storeId: request.body.storeId,
      isKill: request.body.isKill,
      info: request.body.info,
      token: GlobalMethods.tokenDes(request.body.token)
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/store/exchangeCommodity', data);
  },
  getShopInfo: function(request, response, callback) {
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
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getStorePageInfo', data);
  },
  setShopInfo: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        versionName: request.body.versionName,
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
    let data = ''
    data = querystring.stringify({
      token: GlobalMethods.tokenDes(request.body.token)
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserExchangeLog', data);
  },
  getPhoneRecord: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getLatestExchangeLog');
  }
};
