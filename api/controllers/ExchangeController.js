/**
 * ExchangeController
 *
 * @description :: Server-side logic for managing exchanges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
var loda = require('lodash');
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
module.exports = {
  // 兑吧 商城接口
  autologin: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/duiba/autologin');
  },
  autologinbg: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token),
      productId: request.body.productId
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/duiba/autologinbg',data);
  },
  queryForFrontItem: function(request, response, callback) {
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-coin/duiba/queryForFrontItem');
  },
  getUserVipInfo: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token)
    });
    var options = {
      hostname: 'api.ppmiao.com',
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
      //   loda.replace()
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
        clearTimeout(responseTimer);
        if (res.statusCode == 200) {
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            let data = resp.resText;
            data = data.replace(/[\r\n]/g, "");
            var ciphertext = CryptoJS.DES.decrypt(data, key, {
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
            });
            ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
            response.send(ciphertext);
          } else {
            response.send(resp.resText);
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
  getExchangeList: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token)
    });

    var options = {
      hostname: 'api.ppmiao.com',
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            let data = resp.resText;
            data = data.replace(/[\r\n]/g, "");
            var ciphertext = CryptoJS.DES.decrypt(data, key, {
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
            });
            ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
            response.send(ciphertext);
          } else {
            response.send(resp.resText);
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
  claimExchange: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token),
      id: request.body.id
    });
    var options = {
      hostname: 'api.ppmiao.com',
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            let data = resp.resText;
            data = data.replace(/[\r\n]/g, "");
            var ciphertext = CryptoJS.DES.decrypt(data, key, {
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
            });
            ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
            response.send(ciphertext);
          } else {
            response.send(resp.resText);
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
  getWeeklyAward: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token)
    });

    var options = {
      hostname: 'api.ppmiao.com',
      path: '/user/getWeeklyAward.json',
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            let data = resp.resText;
            data = data.replace(/[\r\n]/g, "");
            var ciphertext = CryptoJS.DES.decrypt(data, key, {
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
            });
            ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
            response.send(ciphertext);
          } else {
            response.send(resp.resText);
          }
        }
      });
    });
    req.on('error', function(e) {
      if (callback) {
        callback(e, null);
      }
      console.log('problem with request ' + e.message);
    });
    req.write(data);
    req.end();
  },
  claimWeeklyAward: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token),
      id: request.body.id
    });
    var options = {
      hostname: 'api.ppmiao.com',
      path: '/user/claimWeeklyAward.json',
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
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            let data = resp.resText;
            data = data.replace(/[\r\n]/g, "");
            var ciphertext = CryptoJS.DES.decrypt(data, key, {
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
            });
            ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
            response.send(ciphertext);
          } else {
            response.send(resp.resText);
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
  des: function(token) {
    var key = '5Df8$&@S';
    var iv = CryptoJS.enc.Utf8.parse(key);
    var key = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.TripleDES.decrypt(token, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    // 转换为 utf8 字符串
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
    return decrypted;
  }
};
