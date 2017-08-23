if (sails.config.environment === 'development') {
    var apiHost='api.test.ppmiao.com';
}
if (sails.config.environment === 'production') {
    var apiHost='api.ppmiao.cn';
}
module.exports = {
    apiHost: apiHost,
    apiPort: 8089,
    DBVal: 'rm-uf6cm0kpb0rm130szo.mysql.rds.aliyuncs.com'
};
