
// create by zz 2017 1025


 var querystring = require('querystring');

 module.exports = {
   // 理财 定期专区
   queryInProgressProjectV8: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/queryInProgressProjectV8.json',data);
   },

   moreProject: function(request, response, callback) {
     var data = querystring.stringify({
       versionName: request.body.versionName,
       pageNo: request.body.pageNo,
       status: request.body.status
     });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/project/moreProject.json',data);
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
  }
 }






























// ****
