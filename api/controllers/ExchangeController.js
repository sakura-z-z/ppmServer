/**
 * ExchangeController
 *
 * @description :: Server-side logic for managing exchanges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
module.exports = {
  getUserVipInfo: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token
    });
    var options = {
      hostname: 'api.test.ppmiao.com',
      path: '/user/getUserVipInfo.json',
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
            console.log(body);
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
  getExchangeList: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token
    });

    var options = {
      hostname: 'api.test.ppmiao.com',
      path: '/user/getExchangeList.json',
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
  claimExchange: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token
    });

    var options = {
      hostname: 'api.test.ppmiao.com',
      path: '/user/claimExchange.json',
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
