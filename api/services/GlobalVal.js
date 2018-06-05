if (sails.config.environment === 'development') {
    var apiHost='api.test.ppmiao.com';
    var apiHostPHP='api.dev.ppmiao.net';
    var apiHostCallback='https://callback.ppmiao.com';
    var apiHostWechat='webchat2.test.ppmiao.com';
    var apiPort1 = '8089';
    var apiPort2 = '8083';
}
if (sails.config.environment === 'production') {
    var apiHost='api.ppmiao.cn';
    var apiHostPHP='api.ppmiao.net';
    var apiHostCallback='https://callback.ppmiao.com';
    var apiHostWechat='webchat2.test.ppmiao.com';
    var apiPort1 = '8089';
    var apiPort2 = '8089';
    // var apiHost='api.prepare.ppmiao.cn';

    // http://120.55.240.160:8089/ppmiao-rest/payment/activity/inviteFriend/checkActivity.htm
}
module.exports = {
    apiHost: apiHost,
    apiHostPHP: apiHostPHP,
    apiHostCallback: apiHostCallback,
    apiHostWechat: apiHostWechat,
    apiPort: apiPort1,
    apiPortTest:apiPort2,
    DBVal: 'rm-uf6cm0kpb0rm130szo.mysql.rds.aliyuncs.com'
};
