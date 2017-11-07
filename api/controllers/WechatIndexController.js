/**
 * WechatIndexController
 *
 */

 var querystring = require('querystring');
 // 轮播图
 module.exports = {
 	 bannerList: function(request, response, callback) {
      var data = querystring.stringify({
        position: request.body.position,
        versionName: request.body.versionName
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/bannerList.json',data);
   },
    //首页推荐标+累计投资-盈利金额
   queryRecommendProjectV4: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName
     });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/queryRecommendProjectV4.json',data);
   },
  //首页启动数据
  getAppStartupConfig: function(request, response, callback) {
    var data = querystring.stringify({
      versionName: request.body.versionName
    });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getAppStartupConfig.json',data);
  },
   //  新手指引
   getNewProjects: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName
     });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getNewProjects.json',data);
   },

   //发现页面的接口 这个放在最后一个
   getHistoryEvent: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName
     });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getHistoryEvent.json',data);
   }

 };































//
