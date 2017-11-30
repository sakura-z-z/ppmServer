var querystring = require('querystring');


 module.exports = {
   // 12月榜单
 	 getRanking12: function(request, response, callback) {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        versionName: request.body.versionName,
        keyName: request.body.keyName,
        top: request.body.top,
        durationDay: request.body.durationDay,
        ghost: request.body.ghost,
        mothly: request.body.mothly
      });
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getRanking.json',data);
   }
 }
