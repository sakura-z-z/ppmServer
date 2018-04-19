/**
 * WechatIndexController
 *
 */

 var querystring = require('querystring');

 module.exports = {
  //  微信信息
    // getUserAccessTokenByCode: function(request, response, callback) {
    //    var data = querystring.stringify({
    //      url: request.body.url
    //    });
    //     GlobalMethods.httpPost(request, response, callback, 'http://webchat2.test.ppmiao.com/wechat/', 'getUserAccessTokenByCode');
    // },
   // 轮播图
 	 bannerList: function(request, response, callback) {
      var data = querystring.stringify({
        position: request.body.position,
        versionName: request.body.versionName
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/bannerList.json',data);
   },
   // 获取导航图片
 	 getAdvIcon: function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getAdvIcon.json',data);
   },

    //首页公告
   getHomePageNotice: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName
     });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getHomePageNotice.json',data);
   },
   //首页悬浮球
   getPopupAndSuspend: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       pos: request.body.pos,
       token: request.body.token
     });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getPopupAndSuspend.json',data);
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
       versionName: request.body.versionName,
       token: request.body.token
     });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getNewProjects.json',data);
   },

   //发现页面的接口 这个放在最后一个
   getHistoryEvent: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       status: request.body.status,
       page: request.body.page
     });
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getHistoryEvent.json',data);
   },
   //前后三天的积分信息
   getUserDailySignValue: function(request,response,callback){
       var data = querystring.stringify({
           versionName: request.body.versionName,
           token: request.body.token
       });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserDailySignValueV2.json',data);
   },
   //用户今日是否签到
   checkUserSignStatus:function(request, response, callback) {
      var data = querystring.stringify({
        versionName: request.body.versionName,
        token: request.body.token
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/checkUserSignStatus.json',data);
   },
   //用户当月已签到的日期
   getUserMonthlySignInfo: function(request,response,callback){
       var data = querystring.stringify({
           versionName: request.body.versionName,
           userId: request.body.userId,
           token: request.body.token,
           year: request.body.year,
           month: request.body.month,
       });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/getUserMonthlySignInfoV2.json',data);
   },
   //前后三天的积分信息
   dailySign: function(request,response,callback){
       var data = querystring.stringify({
           versionName: request.body.versionName,
           userId: request.body.userId,
           token: request.body.token
       });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/dailySignV2.json',data);
   }

 };































//
