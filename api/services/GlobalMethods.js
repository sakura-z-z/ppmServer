var CryptoJS = require("crypto-js");
var http = require('http');
var querystring = require('querystring');
const mysql = require("mysql"); //调用MySQL模块
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
var query = require('../models/pool');
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
    let body = '';
    console.log(data);
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
          console.log(body);
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
  base64decode: function(str) {
    var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
      /* c1 */
      do {
        c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
      } while (i < len && c1 == -1);
      if (c1 == -1)
        break;
      /* c2 */
      do {
        c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
      } while (i < len && c2 == -1);
      if (c2 == -1)
        break;
      out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
      /* c3 */
      do {
        c3 = str.charCodeAt(i++) & 0xff;
        if (c3 == 61)
          return out;
        c3 = base64DecodeChars[c3];
      } while (i < len && c3 == -1);
      if (c3 == -1)
        break;
      out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
      /* c4 */
      do {
        c4 = str.charCodeAt(i++) & 0xff;
        if (c4 == 61)
          return out;
        c4 = base64DecodeChars[c4];
      } while (i < len && c4 == -1);
      if (c4 == -1)
        break;
      out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
  },
  getUser: function(request, response, callback, mocktoken) {
    let token = mocktoken;
    let tokenstr = this.base64decode(mocktoken);
    let result = '';
    if (tokenstr == '') {
      result = {
        code: false,
        errorMsg: "您的登录状态有误，请重新登录"
      };
      return result;
    }
    let tokenArr = tokenstr.split("_");
    var userInfo = {
      id: tokenArr[2],
      salt: tokenArr[3]
    }
    // const TABLE = "s_user";

    query('use ppmiao_test;select salt from s_user where id=' + userInfo.id, function(err, results, fields) {
      if (err) {
        throw (err);
      } else {
          if(results != '') {
              let uSalt = userInfo.salt;
              let rSalt = results[results.length-1][0].salt;
              if (uSalt == rSalt) {
                  result = {
                    code: true,
                    errorMsg: "成功"
                  };
                  console.log(result); //{ code: true, errorMsg: '成功' }
                  // response.send(result);
                  return result;
              } else {
                  result = {
                    code: false,
                    errorMsg: "您的登录状态已失效"
                  };
                  console.log(result); //{ code: false, errorMsg: '您的登录状态已失效' }
                  // response.send(result);
                  return result;
              }
          } else {
              result = {
                code: false,
                errorMsg: "您的登录状态已失效"
              };
              console.log(result); //{ code: false, errorMsg: '您的登录状态已失效' }
            //   response.send(result);
            return result;
          }
      }
    });
},
httpPostForm: function(request, response, callback, host, path, redata, port) {
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
        'Content-Type': 'multipart/form-data',
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
        'Content-Type': 'multipart/form-data',
        'Content-Length': data.length,
      }
    };
  }
  console.log(data);
  let body = '';
  console.log(data);
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
}
};
