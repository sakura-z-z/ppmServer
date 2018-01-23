/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMysqlServer'
  // },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: 6666,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }
  //正式
  DBhost: 'rm-2ze7q01622jxz4504.mysql.rds.aliyuncs.com',
  DBuser: 'ppmiao_online',
  DBpassword: 'knfa04yF5',
  database_User: 'ppmiao_online',
  database_Member: 'ppmiao_coin',
  apiHost: 'api.ppmiao.cn',
  apiHostPHP: 'api.ppmiao.net',
  redisHost: 'r-bp16ebde2f508e54.redis.rds.aliyuncs.com',
  redisPassword: 'Nstlc20435DFD0rtgdf43gsd34u489',
};
