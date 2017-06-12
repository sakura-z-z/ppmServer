/**
 * ShopController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var http = require('http');
 var CryptoJS = require("crypto-js");
 var querystring = require('querystring');
module.exports = {
    getShopInfo: function(request, response, callback) {
      var data = querystring.stringify({
        token: request.body.token,
        userId: request.body.userId
      });

      var options = {
        hostname: 'api.ppmiao.com',
        path: '/ppmiao-coin/getStorePageInfo',
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
    setShopInfo: function(request, response, callback) {
      var data = querystring.stringify({
        token: request.body.token,
        storeId: request.body.storeId
      });

      var options = {
        hostname: 'api.ppmiao.com',
        path: '/ppmiao-coin/exchangeCommodity',
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
  getShopRecord: function(request, response, callback) {
    var data = querystring.stringify({
      token: request.body.token,
      userId: request.body.userId
    });

    var options = {
      hostname: 'api.ppmiao.com',
      path: '/ppmiao-coin/getUserExchangeLog',
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
getPhoneRecord: function(request, response, callback) {
  var data = querystring.stringify({
    token: request.body.token
  });

  var options = {
    hostname: 'api.test.ppmiao.com',
    path: '/ppmiao-coin/getLatestExchangeLog',
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
}
};
