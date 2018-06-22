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
      //   hostname: '114.55.85.42',
      //   port: 10504,
      hostname: 'server.ppmiao.com',
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            response.send(responseDesNormal(resp));
          } else {
            response.send(resp);
          }
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
      //   hostname: '114.55.85.42',
      //   port: 10504,
      hostname: 'server.ppmiao.com',
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            body = GlobalMethods.responseDesNormal(resp);
          }
          let arr = [];
          let recordarr = [];
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
  getInviteInfo2: function(request, response, callback) {
    if (request.body.mobile != undefined) {
      var data = querystring.stringify({
        mobile: request.body.mobile
      });
    } else {
      var data = querystring.stringify({});
    }

    var options = {
      host: GlobalVal.apiHost,
      path: '/ppmiao-award/inviteFriendInfo',
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            response.send(responseDesNormal(resp));
          } else {
            if (typeof resp.resText == 'string') {
              response.send(JSON.parse(resp.resText));
            } else {
              response.send(resp.resText);
            }
          }
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
  getInviteList2: function(request, response, callback) {
    if (request.body.mobile != undefined) {
      var data = querystring.stringify({
        mobile: request.body.mobile
      });
    } else {
      var data = querystring.stringify({});
    }

    var options = {
      host: GlobalVal.apiHost,
      path: '/ppmiao-award/inviteFriendList',
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
      }
    };
    let body = '';
    let result = '';
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            response.send(responseDesNormal(resp));
          }else {
            if (typeof resp.resText == 'string') {
              result = JSON.parse(resp.resText).result;
            } else {
              result = resp.resText.result;
            }
            let arr = [];
            let recordarr = [];
            let month = 0;
            let time = 0;
            result.map(function(item, index) {
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
              if (index == result.length - 1) {
                arr.push({
                  time: Moment.unix(time / 1000).format('YYYY/MM'),
                  record: recordarr
                });
              }
            });
            response.send(arr);
          }
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
