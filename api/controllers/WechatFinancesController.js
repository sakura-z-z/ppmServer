
// create by zz 2017 1025


 var querystring = require('querystring');

 module.exports = {
   // 理财 定期专区
   queryInProgressProjectV8: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       zone: request.body.zone
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/queryInProgressProjectV8.json',data);
   },

   moreProject: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       pageNo: request.body.pageNo,
       status: request.body.status,
       zone: request.body.zone
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/moreProject.json',data);
  },
  // 理财页tab显隐
  getLable: function(request, response, callback) {
    var data = querystring.stringify({

    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getLable.json',data);
  },

  //理财详情接口
  detailV3: function(request, response, callback) {
    var data = querystring.stringify({
      versionName: request.body.versionName,
      id: request.body.id
    });
   GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/detailV3.json',data);
  },

  //投资人数列表
  projectInvestLog: function(request, response, callback) {
    var data = querystring.stringify({
      versionName: request.body.versionName,
      projectId: request.body.projectId,
      pageNo: request.body.pageNo
    });
   GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/projectInvestLog.json',data);
   },
   //投资页面数据
   getCouponsForInvest: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       token: request.body.token,
       deviceType: request.body.deviceType,
       userId: request.body.userId
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getCouponsForInvest.json',data);
  },
   // 立即投资
   investV2: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       deviceType: request.body.deviceType,
       token: request.body.token,
       amount: request.body.amount,
       realAmount: request.body.realAmount,
       redpackets: request.body.redpackets,
       interestCoupon: request.body.interestCoupon,
       id: request.body.id,
       userId: request.body.userId
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/investV2.json',data);
  }
}
