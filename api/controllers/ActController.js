/**
 * ActController
 *
 * @description :: Server-side logic for managing acts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
module.exports = {
  getInviteInfo: function(request, response, callback) {
    var data = querystring.stringify({
      mobile: '13588016645'
    });

    var options = {
      hostname: '114.55.85.42',
      port: 10504,
      path: '/stone-rest/payment/activity/inviteFriend/getInviteInfo.htm',
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
      }
    };
    let body = '';
    var req = http.request(options, (res) => {
      var responseTimer = setTimeout(function() {
        res.destroy();
        debug('......Response Timeout......');
      }, 5000);
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
        clearTimeout(responseTimer);
        if (res.statusCode == 200) {
            response.send(body);
        }
      });
    });
    req.on('error', function(e) {
      if (callback) {
        callback(e, null);
      }
      console.log('problem with request: ' + e.message);
    });
    req.write(data);
    req.end();
  },
  getInviteList: function(request, response, callback) {
    var data = querystring.stringify({
      mobile: request.body.mobile
    });

    var options = {
      hostname: '114.55.85.42',
      port: 10504,
      path: '/stone-rest/payment/activity/inviteFriend/getInviteList.htm',
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
      }
    };
    let body = '';
    var req = http.request(options, (res) => {
      var responseTimer = setTimeout(function() {
        res.destroy();
        debug('......Response Timeout......');
      }, 5000);
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
        clearTimeout(responseTimer);
        if (res.statusCode == 200) {
          response.send(body);
        }
      });
    });
    req.on('error', function(e) {
      if (callback) {
        callback(e, null);
      }
      console.log('problem with request: ' + e.message);
    });
    req.write(data);
    req.end();
  },
  getoldInviteList: function(request, response, callback) {
    var mobile = request.url.substring(request.url.length - 11, request.url.length)
    let body = '';
    http.get('http://testing.ppmiao.com/hd/getInviteData.html?mobile=' + mobile, (res) => {
      res.on('data', (data) => {
        body += data;
      }).on('end', (chunk) => {
        if (res.statusCode == 200) {
          response.send(body);
        }
      });
    });
  },
  test: function(request, response, callback, hostname, path) {
    var data = querystring.stringify({
      // mobile: request.body.mobile
    });
    this.post(request, response, callback, 'api.test.ppmiao.com',
      '/ppmiao-coin/getAllJfTasks', {
        mobile: "1232222"
      });
  },
  post: function(request, response, callback, hostname, path, protroy) {
    var data = querystring.stringify({
      // mobile: request.body.mobile
    });
    var options = {
      hostname: hostname,
      path: path,
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
      }
    };
    let body = '';
    var req = http.request(options, (res) => {
      var responseTimer = setTimeout(function() {
        res.destroy();
        debug('......Response Timeout......');
      }, 5000);
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        if (chunk != undefined) {
          body += chunk;
        }
      }).on('end', (chunk) => {
        clearTimeout(responseTimer);
        if (res.statusCode == 200) {
          let resp = JSON.parse(body);
          response.send(JSON.parse(resp.resText));
        }
      });
    });
    req.on('error', function(e) {
      if (callback) {
        callback(e, null);
      }
      console.log('problem with request: ' + e.message);
    });
    req.write(data);
    req.end();
  }
};
