/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/



  /***************************************************************************
  *                                                                          *
  * 会员中心                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/home': 'InfoController.getHomeInfo',
  '/integral':'InfoController.getIntegral',
  '/integralMession':'InfoController.getIntegralMession',
  '/Privilege': 'PrivilegeController.getPrivilegeInfo',
  '/setPrivilege': 'PrivilegeController.setPrivilegeInfo',
  '/getPrivilegeRecord': 'PrivilegeController.getPrivilegeRecord',
  '/getGrowUp': 'PrivilegeController.getGrowUp',
  '/getShopInfo': 'ShopController.getShopInfo',
  '/setShopInfo': 'ShopController.setShopInfo',
  '/getShopRecord': 'ShopController.getShopRecord',
  '/getPhoneRecord': 'ShopController.getPhoneRecord',

  /***************************************************************************
  *                                                                          *
  * 好友邀请                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/getInviteList': 'ActController.getInviteList',
  '/getInviteInfo': 'ActController.getInviteInfo',
  '/getoldInviteList': 'ActController.getoldInviteList',


  /***************************************************************************
  *                                                                          *
  * 会员中心积分兑换                                                            *
  *                                                                          *
  ***************************************************************************/
  '/getUserVipInfo': 'ExchangeController.getUserVipInfo',
  '/getExchangeList': 'ExchangeController.getExchangeList',
  '/claimExchange': 'ExchangeController.claimExchange',
  '/getWeeklyAward': 'ExchangeController.getWeeklyAward',
  '/claimWeeklyAward': 'ExchangeController.claimWeeklyAward',


  /***************************************************************************
  *                                                                          *
  * 绑卡                                                                      *
  *                                                                          *
  ***************************************************************************/

  '/getBanklist': 'BindCardController.getBanklist',
  '/updateMainBankCard': 'BindCardController.updateMainBankCard',
  '/checkUserBindCard': 'BindCardController.checkUserBindCard',



  /***************************************************************************
  *                                                                          *
  * 公共方法                                                                    *
  *                                                                          *
  ***************************************************************************/

  '/getDesToken': 'CommonController.getDesToken',
  '/getPhone': 'CommonController.getPhone',
  '/encryptToken':'CommonController.encryptToken',


  /***************************************************************************
  *                                                                          *
  * 连接数据库                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/linksql': 'LinkSqlController.linksql'
  

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
