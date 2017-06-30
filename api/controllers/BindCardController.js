/**
 * BindCardController
 *
 * @description :: Server-side logic for managing bindcards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
module.exports = {
  // getBanklist: function(request, response, callback) {
  //   var data = querystring.stringify({
  //     token: request.body.token
  //   });
  //   GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllBindCardInfo.json', data);
  // },
  // updateMainBankCard: function(request, response, callback) {
  //   var data = querystring.stringify({
  //     token: request.body.token
  //   });
  //   GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllBindCardInfo.json', data);
  // },
  getBanklist: function(request, response, callback) {
    if (request.body.token != undefined) {
      var data = querystring.stringify({
        token: request.body.token
      });
    } else {
      var data = querystring.stringify({});
    }

    var options = {
      hostname: '114.55.85.42',
      port: 10502,
      //   hostname: 'api.ppmiao.com',
      path: '/stone-rest/rest/user/getAllBindCardInfo.json',
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
            let send = JSON.parse(GlobalMethods.responseDesNormal(resp));
            response.send(send);
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
  updateMainBankCard: function(request, response, callback) {
    if (request.body.bankId != undefined && request.body.token != undefined) {
      var data = querystring.stringify({
        token: request.body.token,
        bankId: request.body.bankId
      });
    } else {
      var data = querystring.stringify({});
    }

    var options = {
      hostname: '114.55.85.42',
      port: 10502,
      //   hostname: 'api.ppmiao.com',
      path: '/stone-rest/rest/user/updateMainBankCard.json',
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
              let send = JSON.parse(GlobalMethods.responseDesNormal(resp));
              response.send(send);
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
  }

};
