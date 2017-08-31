if (sails.config.environment === 'development') {
    var apiHost='api.test.ppmiao.com';
}
if (sails.config.environment === 'production') {
    // var apiHost='api.ppmiao.cn';
    var apiHost='120.55.240.160';

    // http://120.55.240.160:8089/ppmiao-rest/payment/activity/inviteFriend/checkActivity.htm
}
module.exports = {
    apiHost: apiHost,
    apiPort: 8089,
    DBVal: 'rm-uf6cm0kpb0rm130szo.mysql.rds.aliyuncs.com'
};
