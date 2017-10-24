/**
 * WechatIndexController
 *
 */

 var querystring = require('querystring');
 // 轮播图
 module.exports = {
 	bannerList: function(request, response, callback) {
    console.log(request.body);
      var data = querystring.stringify({
        position: request.body.position,
        versionName: request.body.versionName
      });
      console.log(data);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/bannerList.json',data);
     }
 };
