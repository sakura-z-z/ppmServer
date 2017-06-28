/**
 * ActController
 *
 * @description :: Server-side logic for managing acts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
var Moment = require('moment');
module.exports = {
  getInviteInfo: function(request, response, callback) {
    if (request.body.mobile != undefined) {
      var data = querystring.stringify({
        mobile: request.body.mobile
      });
    } else {
      var data = querystring.stringify({});
    }

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
    if (request.body.mobile != undefined) {
      var data = querystring.stringify({
        mobile: request.body.mobile
      });
    } else {
      var data = querystring.stringify({});
    }

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
          console.log(body);
          let arr = [];
          let recordarr = [];
          let resp = JSON.parse(body);
          let month = 0;
          let time = 0;
          resp.result.map(function(item, index) {
            if (month == 0) {
              month = item.time.month;
              time = item.time.time;
            }
            if (item.time.month == month) {
              recordarr.push({
                index: index,
                award: item.award,
                source: item.source
              });
            } else {
              arr.push({
                time: Moment.unix(time / 1000).format('YYYY/MM'),
                record: recordarr
              });
              month = item.time.month;
              time = item.time.time;
              recordarr = [];
              recordarr.push({
                index: index + 1,
                award: item.award,
                source: item.source
              });
            }
            if (index == resp.result.length - 1) {
              arr.push({
                time: Moment.unix(time / 1000).format('YYYY/MM'),
                record: recordarr
              });
            }
          });
          response.send(arr);
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
