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
          console.log(resp.resText);
          var data1 = '{"code":"0","result":"1kp0P/DuJGAdgc9jl0QoGDjHH9/azHSPcXUTkXZ8CacdkoKC4WHzt312jVihC7HL","errorType":null,"errorMsg":"正常","success":true}';
          var data2 = 'eyqHDoeDrIra8sRTOHhugsPus7Yb6N7FKpi5uiKKE1Wy8lesZPflSqsf/YP2e8XWxQrZ/T5cbyV4\n0FlETnrJLp3Y0snHyEzYknri7qSmoXVQanPfupNyYP5Zp5WfuJ79bpdQqwI8lXtRUpIRfPp8aoaL\ndSmDAtRKOTrCnjPG6FwgmAAQ3L9E6/jUV6t2Ar6S\n';
          var data3 = 'eyqHDoeDrIra8sRTOHhugsPus7Yb6N7FKpi5uiKKE1Wy8lesZPflSqsf/YP2e8XWxQrZ/T5cbyV40FlETnrJLp3Y0snHyEzYknri7qSmoXVQanPfupNyYP5Zp5WfuJ79bpdQqwI8lXtRUpIRfPp8aoaLdSmDAtRKOTrCnjPG6FwgmAAQ3L9E6/jUV6t2Ar6S'
        //   if(data2.replace(/[\r\n]/g, "")){
        //       console.log(data2);
        //   }
          data2 = data2.replace(/[\r\n]/g, "")
          console.log(data2);
          console.log(data3);
          // Encrypt
          //   var ciphertext = CryptoJS.DES.encrypt(JSON.stringify(data1), '5Df8$&@S').toString();
          var ciphertext = CryptoJS.DES.encrypt(resp.resText, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            blockSize: 8
          });
        //   console.log('ciphertext');
        //   console.log(ciphertext.toString());

          // Decrypt
          var ciphertext = CryptoJS.DES.decrypt(data2, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
          //   var decryptedData = ciphertext.toString(CryptoJS.enc.Utf8);
          console.log(ciphertext);
          //   response.send(decrypt);
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
