var CryptoJS = require("crypto-js");
var http = require('http');
var querystring = require('querystring');
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
module.exports = {
  tokenDes: function(token) {
    var decrypted = CryptoJS.TripleDES.decrypt(token, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    // 转换为 utf8 字符串
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
    return decrypted;
  },
  responseDes: function(body) {
    let data = body.resText;
    data = data.replace(/[\r\n]/g, "");
    var ciphertext = CryptoJS.DES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
    if (ciphertext && typeof ciphertext == 'string') {
      return JSON.parse(ciphertext);
    }
    if (ciphertext && typeof ciphertext == 'object') {
      return ciphertext;
    }
  },
  ReleaseToken: function(data) {
    data = data.replace(/[\r\n]/g, "");
    var ciphertext = CryptoJS.DES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
    return ciphertext;
  },
  ReleaseDesToken: function(data) {
    var ciphertext = CryptoJS.TripleDES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return ciphertext.toString();
    // return ciphertext;
  },
  responseDesNormal: function(body) {
    let data = body.resText;
    data = data.replace(/[\r\n]/g, "");
    var ciphertext = CryptoJS.DES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    body.resText = CryptoJS.enc.Utf8.stringify(ciphertext);
    return body;
  },
  httpPost: function(request, response, callback, host, path, redata, port) {
    let data = '';
    let version;
    if (redata != undefined) {
      data = redata;
    } else {
      if (request.body.versionName != null) {
          version = request.body.versionName;
          data = querystring.stringify({
              token: this.tokenDes(request.body.token),
            //   versionName: request.body.versionName
              versionName: version
          });
      } else {
        data = querystring.stringify({
          token: this.tokenDes(request.body.token)
        });
      }
    }
    console.log(port);
    var options;
    if (port == undefined) {
      var options = {
        hostname: host,
        path: path,
        method: 'POST',
        agent: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': data.length,
        }
      };
    } else {
      var options = {
        hostname: host,
        port: port,
        path: path,
        method: 'POST',
        agent: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': data.length,
        }
      };
    }
    console.log(data);
    let body = '';
    var req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
        console.log(body);
        if (res.statusCode == 200) {
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            response.send(this.responseDes(resp));
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
  httpPostPHP: function(request, response, callback, host, path, redata, port) {
    let data = '';
    if (redata != undefined) {
      data = redata;
    } else {
      if (request.body.versionName != null) {
        data = querystring.stringify({
          token: this.tokenDes(request.body.token),
          versionName: request.body.versionName
        });
      } else {
        data = querystring.stringify({
          token: this.tokenDes(request.body.token)
        });
      }
    }
    var options;
    if (port == undefined) {
      var options = {
        hostname: host,
        path: path,
        method: 'POST',
        agent: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': data.length,
        }
      };
    } else {
      var options = {
        hostname: host,
        port: port,
        path: path,
        method: 'POST',
        agent: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': data.length,
        }
      };
    }
    console.log(data);
    let body = '';
    var req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
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
  }
};
