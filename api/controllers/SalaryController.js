/**
 * SalaryController
 *
 * @description :: Server-side logic for managing salaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var querystring = require('querystring');
var moment = require('moment');
module.exports = {
  getMonthlyInterestConfig: function(request, response, callback) {
    var data = querystring.stringify({});
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getMonthlyInterestConfig.json', data);
  },
  getUserMonthlyProjectInvestLog: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({token: request.body.token});
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token)
      });
    }
    var options = {
      hostname: GlobalVal.apiHost,
      path: '/activity/getUserMonthlyProjectInvestLog.json',
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
      }
    };
    // var options = {
    //   hostname: 'www.easy-mock.com',
    //   path: '/mock/594e1ef79adc231f356988b4/invite/getInviteList_copy_1506071202585',
    //   method: 'POST',
    //   agent: false,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Content-Length': data.length
    //   }
    // };
    let body = '';
    var req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
        if (res.statusCode == 200) {
          let resp = JSON.parse(body);
          if (resp.isEnc == 'Y') {
            body = GlobalMethods.responseDesNormal(resp);
          }
          let arr = [];
          let recordarr = [];
          let month = 0;
          resp = JSON.parse(resp.resText);
          console.log(resp);
          if (resp.code == "0") {
            resp.result.map(function(item, index) {
              if (month == 0) {
                month = moment.unix(item.addTime / 1000).format('YYYY/MM');
              }
              if (moment.unix(item.addTime / 1000).format('YYYY/MM') == month) {
                recordarr.push({
                  index: index + 1,
                  projectTitle: item.projectTitle,
                  invSucc: item.invSucc,
                  interestCoupon: item.interestCoupon,
                  time: moment.unix(item.addTime / 1000).format('YYYY/MM')
                });
              } else {
                arr.push({time: month, record: recordarr});
                month = moment.unix(item.addTime / 1000).format('YYYY/MM');
                recordarr = [];
                recordarr.push({
                  index: index + 1,
                  projectTitle: item.projectTitle,
                  invSucc: item.invSucc,
                  interestCoupon: item.interestCoupon,
                  time: moment.unix(item.addTime / 1000).format('YYYY/MM')
                });
              }
              if (index == resp.result.length - 1) {
                arr.push({
                  time: moment.unix(item.addTime / 1000).format('YYYY/MM'),
                  record: recordarr
                });
              }
            });
            console.log(arr);
            response.send(arr);
        } else {
            if (typeof resp == 'string') {
              response.send(JSON.parse(resp));
            } else {
              response.send(resp);
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
