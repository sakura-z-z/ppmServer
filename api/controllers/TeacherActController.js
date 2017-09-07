/**
 * TeacherActController
 *
 * @description :: Server-side logic for managing Teacheracts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var querystring = require('querystring');
 module.exports = {
 	checkActivity2: function(request, response, callback) {
       var data = querystring.stringify({keyName: request.body.keyName});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/checkActivty.json', data);
     },
 	getRanking: function(request, response, callback) {
       var data = querystring.stringify({token: GlobalMethods.tokenDes(request.body.token)});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getRanking.json', data);
     }
 };
