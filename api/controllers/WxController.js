/**
 * WxController
 *
 * @description :: Server-side logic for managing Wxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var querystring = require('querystring');
module.exports = {
  wxToken: function(request, response, callback) {
    http.get('http://wechat.ppmiao.com/ap/jssdk?url=' + request.body.url, function(res) {
      var body = [];
      res.on('data', function(chunk) {
        body.push(chunk);
      });
      res.on('end', function() {
        body = Buffer.concat(body);
        response.send(body.toString());
      });
    });
  },
};
