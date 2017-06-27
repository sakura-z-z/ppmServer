/**
 * InfoController
 *
 * @description :: Server-side logic for managing Infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
module.exports = {
  getHomeInfo: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token
    });
    if (request.body.versionName) {
        var data = querystring.stringify({
          token: request.body.token,
          versionName: request.body.versionName,
        });
    }

    var options = {
      hostname: 'api.ppmiao.com',
      path: '/ppmiao-coin/getVipHomepageBean',
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
  getIntegral: function(request, response) {
    var data = querystring.stringify({
      token: request.body.token
    });
    if (request.body.versionName) {
        var data = querystring.stringify({
          token: request.body.token,
          versionName: request.body.versionName,
        });
    }
    var options = {
      hostname: 'api.ppmiao.com',
      path: '/ppmiao-coin/getUserMissionLog',
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
      }
    };
    let body = '';
    var req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
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
      }).on('error', function(e) {
        console.log('problem with request: ' + e.message);
        console.log('statusCode' + res.statusCode);
      });
    });
    req.write(data);
    req.end();
  },
  getIntegralMession: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token
    });
    if (request.body.versionName) {
        var data = querystring.stringify({
          token: request.body.token,
          versionName: request.body.versionName,
        });
    }
    var options = {
      hostname: 'api.ppmiao.com',
      path: '/ppmiao-coin/getAllJfTasks',
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
