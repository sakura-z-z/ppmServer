/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
    port: 2019,
    DBhost: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com',
    DBuser: 'pptang_123',
    DBpassword: 'E8b9J7TjPs0u4Nf',
    database_User: 'ppmiao_test',
    database_Member: 'ppmiao_dev_2017',
    apiHost: 'api.test.ppmiao.com',
    apiHostPHP: 'api.dev.ppmiao.net',
    apiHostCallback:'https://callback.ppmiao.com',
    apiHostWechat:'webchat2.test.ppmiao.com',
    redisHost: 'r-uf678e1e6a9deeb4.redis.rds.aliyuncs.com',
    redisPassword: 'Aa311512',
};
