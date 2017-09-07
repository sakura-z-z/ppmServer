/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
        let istoken = request.body.istoken;
        let body = istoken;
        resp = JSON.parse(GlobalMethods.ReleaseToken(body));
        let data = resp.result.token;
        console.log(GlobalMethods.ReleaseDesToken(data));
        response.send(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
        let istoken = request.body.istoken;
        let body = istoken;
        console.log(GlobalMethods.ReleaseToken(body));
        response.send(GlobalMethods.ReleaseToken(body));
   },
   encryptToken: function(request, response, callback) {
        let istoken = request.body.istoken;
        let body = istoken;
        console.log(GlobalMethods.ReleaseDesToken(body));
        response.send(GlobalMethods.ReleaseDesToken(body));
   },
   connectRedis: function(request, response, callback) {
       let mocktoken = '';
       if (request.body.dev != undefined) {
         mocktoken = request.body.token;
       } else {
         mocktoken = GlobalMethods.tokenDes(request.body.token);
       }
       let token = GlobalMethods.base64decode(mocktoken);
       if (token == '') {
         return;
       }
       let tokenArr = token.split("_");
       let userInfo = {
         id: tokenArr[2],
         salt: tokenArr[3]
       };
       let key = 'ppmiao_uid_' + userInfo.id;
    //    GlobalMethods2.connectRedis(key, mocktoken, function(result){
    //        return result
    //    });
       console.log( GlobalMethods2.connectRedis(key, mocktoken, function(result){
            return result;
        }));
   }
 };
