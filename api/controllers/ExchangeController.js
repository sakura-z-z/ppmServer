/**
 * ExchangeController
 *
 * @description :: Server-side logic for managing exchanges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
module.exports = {
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
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
        clearTimeout(responseTimer);
        if (res.statusCode == 200) {
          let resp = JSON.parse(body);
          var key = '5Df8$&@S';
          var iv = CryptoJS.enc.Utf8.parse(key);
          var key = CryptoJS.enc.Utf8.parse(key);
          var decrypted = CryptoJS.TripleDES.decrypt({
              ciphertext: CryptoJS.enc.Base64.parse(resp.resText)
          }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          console.log(decrypted);
          console.log("------------解码后-----------------");
          var decrypt = decrypted.toString(CryptoJS.enc.Utf8);
          console.log(decrypt);

          var data = [{
            id: 1
          }, {
            id: 2
          }]
          // Encrypt
          var ciphertext = CryptoJS.TripleDES.encrypt(JSON.stringify(data), 'secret key 123');

          // Decrypt
          var bytes = CryptoJS.TripleDES.decrypt(ciphertext.toString(), 'secret key 123');
          console.log(bytes);
          var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
          console.log(decryptedData);



          response.send(decrypt);
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
      hostname: '121.40.211.34',
      port: 8089,
      path: '/stone-rest/rest/user/getExchangeList.json',
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
  },
  claimExchange: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token),
      id: request.body.id
    });
    var options = {
      hostname: '121.40.211.34',
      port: 8089,
      path: '/stone-rest/rest/user/claimExchange.json',
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
  },
  getWeeklyAward: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token)
    });

    var options = {
      hostname: '121.40.211.34',
      port: 8089,
      path: '/stone-rest/rest/user/getWeeklyAward.json',
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
  },
  claimWeeklyAward: function(request, response, callback) {
    var data = querystring.stringify({
      token: this.des(request.body.token),
      id: request.body.id
    });
    var options = {
      hostname: '121.40.211.34',
      port: 8089,
      path: '/stone-rest/rest/user/claimWeeklyAward.json',
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
