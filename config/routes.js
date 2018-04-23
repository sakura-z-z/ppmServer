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
  * 连接数据库                                                                 *
  *                                                                          *
  ***************************************************************************/
  '/tokenExpire': 'LinkSqlController.tokenExpire',
  '/getDueCapital': 'LinkSqlController.getDueCapital',


  /***************************************************************************
  *                                                                          *
  * 金秋活动                                                                  *
  *                                                                          *
  ***************************************************************************/

  '/getinviteAwards': 'AutumnController.getinviteAwards',

  '/getInviteList': 'ActController.getInviteList',
  '/getInviteInfo': 'ActController.getInviteInfo',


  /***************************************************************************
  *                                                                          *
  * 月月加薪                                                                  *
  *                                                                          *
  ***************************************************************************/
  '/getMonthlyInterestConfig': 'SalaryController.getMonthlyInterestConfig',
  '/getUserMonthlyProjectInvestLog': 'SalaryController.getUserMonthlyProjectInvestLog',

  /***************************************************************************
  *                                                                          *
  * 10yue                                                                  *
  *                                                                          *
  ***************************************************************************/
  '/getUserInfoMT': 'Member10Controller.getUserInfoMT',
  /***************************************************************************
  *                                                                          *
  * 贫困日                                                                 *
  *                                                                          *
  ***************************************************************************/
  '/getUserPovertyInvestLog': 'poordayController.getUserPovertyInvestLog',

  /***************************************************************************
  *                                                                          *
  * 七夕                                                                 *
  *                                                                          *
  ***************************************************************************/
  '/getAwards': 'ValentineController.getAwards',


  /***************************************************************************
  *                                                                          *
  * 9月会员                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/userJFVal': 'CircleController.userJFVal',
  '/setJFVal': 'CircleController.setJFVal',
  '/isExchange': 'CircleController.isExchange',

  /***************************************************************************
  *                                                                          *
  * 周末促投3                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/checkUsedAndExchanged': 'Weekend3Controller.checkUsedAndExchanged',
  '/exchangeWeekend3Award': 'Weekend3Controller.exchangeWeekend3Award',

  /***************************************************************************
  *                                                                          *
  * 教师节活动                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/checkActivity2': 'TeacherActController.checkActivity2',
  '/getRanking': 'TeacherActController.getRanking',


  /***************************************************************************
  *                                                                          *
  * 国庆节活动                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/calculateRedPackets': 'NationalDayController.calculateRedPackets',
  '/getProductDetails': 'NationalDayController.getProductDetails',

  /***************************************************************************
  *                                                                          *
  * 万圣节活动                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/getHalloween': 'HalloweenController.getHalloween',

  /***************************************************************************
  *                                                                          *
  * 11月会员活动                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/getUserInfoVip': 'NovemberVipController.getUserInfoVip',

  /***************************************************************************
  *                                                                          *
  * 双十一活动                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/getActivityInvestLog': 'SinglesDayController.getActivityInvestLog',
  /***************************************************************************
  *                                                                          *
  *  元旦活动                                                                 *
  *                                                                          *
  ***************************************************************************/
  '/getNewYearDayActivityAward': 'getNewYearController.getNewYearDayActivityAward',
  /***************************************************************************
  *                                                                          *
  * 感恩节活动                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/getRanking': 'ThanksgivingController.getRanking',
  '/getMyRank': 'ThanksgivingController.getMyRank',
  '/queryThanksGiving': 'ThanksgivingController.queryThanksGiving',
  '/exchangeThanksAward': 'ThanksgivingController.exchangeThanksAward',
  /***************************************************************************
  *                                                                          *
  * 12月会员活动                                                 *
  *                                                                          *
  ***************************************************************************/
  '/queryDecMemberActivity': 'DecemberController.queryDecMemberActivity',
  '/exchangeDecMemberActivity': 'DecemberController.exchangeDecMemberActivity',
  '/getUserInfoVip12': 'DecemberController.getUserInfoVip12',
  /***************************************************************************
  *                                                                          *
  * 年终福利加油站                                                 *
  *                                                                          *
  ***************************************************************************/
  '/addGroup': 'YearEndController.addGroup',
  '/getGroup': 'YearEndController.getGroup',

  /***************************************************************************
  *                                                                          *
  * 圣诞节活动                                                 *
  *                                                                          *
  ***************************************************************************/
  '/getChristmasAward': 'ChristmasController.getChristmasAward',
  /***************************************************************************
  *                                                                          *
  * 2.10会员活动---你的积分有“钱”途                                              *
  *                                                                          *
  ***************************************************************************/
  '/getIntegraM2': 'Member02Controller.getIntegraM2',
  '/exchangeIntegraM2': 'Member02Controller.exchangeIntegraM2',
  /***************************************************************************
  *                                                                          *
  * 新年签活动 红运正当头 新春上上签                                              *
  *                                                                          *
  ***************************************************************************/
  '/newYearDivinationActivity': 'NewYearController.newYearDivinationActivity',

  /***************************************************************************
  *                                                                          *
  * 新春活动 新春财气旺 福利从天降                                              *
  *                                                                          *
  ***************************************************************************/
  '/lotteryNewYear': 'SpringWealthController.lotteryNewYear',


  /***************************************************************************
  *                                                                          *
  * 大客活动                                                  *
  *                                                                          *
  ***************************************************************************/
  '/getPeakKingActivityAward': 'bigCustomerController.getPeakKingActivityAward',
  '/lotteryStatusSetting': 'bigCustomerController.lotteryStatusSetting',

  /***************************************************************************
  *                                                                          *
  * 邀请好友活动（抱团‘友’钱赚）                                                 *
  *                                                                          *
  ***************************************************************************/
  '/exchangeTeamInvest': 'InvitController.exchangeTeamInvest',
  '/invitationUpdateActivity': 'InvitController.invitationUpdateActivity',

  /***************************************************************************
  *                                                                          *
  * 公用的活动接口                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/getLotteryLogByLotteryAwardId': 'PublicController.getLotteryLogByLotteryAwardId',
  '/checkActivity': 'PublicController.checkActivity',
  '/getCashCouponByKeyName': 'PublicController.getCashCouponByKeyName',
  '/exchangeAward': 'PublicController.exchangeAward',
  '/exchangePrize': 'PublicController.exchangePrize',
  '/getCurryTimes': 'PublicController.getCurryTimes',
  '/getPlatformData': 'PublicController.getPlatformData',
  '/getInviteStatistic': 'PublicController.getInviteStatistic',
  '/getAppStartupConfig': 'PublicController.getAppStartupConfig',
  '/lottery': 'PublicController.lottery',
  '/getJFValue': 'PublicController.getJFValue',
  '/getExchangeLog': 'PublicController.getExchangeLog',
  '/getExchangeLogByKeyName': 'PublicController.getExchangeLogByKeyName',
  '/isFirstOpen': 'PublicController.isFirstOpen',
  //兑换现金券接口
  '/exchangeGLCashAward': 'PublicController.exchangeGLCashAward',
  //兑换实物奖励接口
  '/ExChangeAwards': 'PublicController.ExChangeAwards',
  //兑换奖品的地址接口
  '/awardAddress': 'PublicController.awardAddress',
  //获取活动期间前几名投资人
  '/getRankingTop': 'PublicController.getRankingTop',
  /***************************************************************************
  *                                                                          *
  * 用户风险评估                                                               *
  *                                                                          *
  ***************************************************************************/

  '/userType':'DBController.userType',
  '/updateUserType': 'DBController.updateUserType',
  '/UserInfo': 'DBController.UserInfo',


  /***************************************************************************
  *                                                                          *
  * 12月榜单活动                                                               *
  *                                                                          *
  ***************************************************************************/

  '/getRanking12':'endListController.getRanking12',
  /***************************************************************************
  *                                                                          *
  * 除夕活动                                                                  *
  *                                                                          *
  ***************************************************************************/

  '/newYearEveActivity':'newYearEveActivityController.newYearEveActivity',
  // 新年活动
  '/newYearGoodBeginning':'newYearEveActivityController.newYearGoodBeginning',

  /***************************************************************************
  *                                                                          *
  * 17年个人账单                                                             *
  *                                                                          *
  ***************************************************************************/
  '/getYearListphp':'YearListController.getYearListphp',
  /***************************************************************************
  *                                                                          *
  * 抢标夺金记                                                             *
  *                                                                          *
  ***************************************************************************/
  '/purchaseTailProject':'GrabGoldController.purchaseTailProject',
  /***************************************************************************
  *                                                                          *
  * 妇女节活动(财知女人心)                                                         *
  *                                                                          *
  ***************************************************************************/
  '/womenDayActivity':'WomenDayController.womenDayActivity',
  /***************************************************************************
  *                                                                          *
  * 周年庆（缤纷满园 喵趣横生）                                                   *
  *                                                                          *
  ***************************************************************************/
  // 萌喵成长屋
  '/miaowGrowUpActivity':'MainpalaceController.miaowGrowUpActivity',

  /***************************************************************************
  *                                                                          *
  *愚人节活动（收益娱人不愚人）                                                   *
  *                                                                          *
  ***************************************************************************/

  '/foolDayActivity2018':'FoolDay2018Controller.foolDayActivity2018',

  /***************************************************************************
  *                                                                          *
  *春日植树大作战（2018.4.9-2018.4.11）                                                   *
  *                                                                          *
  ***************************************************************************/

  '/treePlantingActivity2018':'Act2018Controller.treePlantingActivity2018',

  /***************************************************************************
  *                                                                          *
  *十二星座占星礼                                                  *
  *                                                                          *
  ***************************************************************************/

  '/AstrologyGiftActivity2018Info':'Act2018Controller.AstrologyGiftActivity2018Info',
  '/AstrologyGiftActivity2018Send':'Act2018Controller.AstrologyGiftActivity2018Send',
  /***************************************************************************
  *                                                                          *
  * 春风拾礼“筝”金记(2018.4.16-2018.4.18)                                             *
  *                                                                          *
  ***************************************************************************/

  '/flyKiteActivity2018':'Act2018Controller.flyKiteActivity2018',
  /***************************************************************************
    *                                                                          *
    * 夺宝联盟探险记(2018.4.23-2018.4.25)                                             *
    *                                                                          *
    ***************************************************************************/

    '/adventureAlliance2018':'Act2018Controller.adventureAlliance2018',
  /***************************************************************************
    *                                                                          *
    * 争做五一“薪”劳模(2018.4.30-2018.5.2)                                             *
    *                                                                          *
    ***************************************************************************/

    '/laborDayActivity2018':'Act2018Controller.laborDayActivity2018',
  /***************************************************************************
  *                                                                          *
  * 公共方法                                                                   *
  *                                                                          *
  ***************************************************************************/
  '/wxToken':'WxController.wxToken',
  '/getDesToken': 'CommonController.getDesToken',
  '/getPhone': 'CommonController.getPhone',
  '/encryptToken':'CommonController.encryptToken',
  '/connectRedis': 'CommonController.connectRedis',



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/








  /***************************************************************************
  *                                                                          *
  * ***** 微  信  端 *****                                                    *
  *                                                                          *
  ***************************************************************************/

  //********   首页    *******
    //微信信息
    // '/getUserAccessTokenByCode': 'WechatIndexController.getUserAccessTokenByCode',
    //轮播图
    '/bannerList': 'WechatIndexController.bannerList',
    //获取导航图片
    '/getAdvIcon': 'WechatIndexController.getAdvIcon',
    //首页公告
    '/getHomePageNotice': 'WechatIndexController.getHomePageNotice',
    //首页悬浮球
    '/getPopupAndSuspend': 'WechatIndexController.getPopupAndSuspend',
    //首页推荐标+累计投资-盈利金额
    '/queryRecommendProjectV4': 'WechatIndexController.queryRecommendProjectV4',
    //首页启动数据
    '/getAppStartupConfig': 'WechatIndexController.getAppStartupConfig',
    //新手指引
    '/getNewProjects': 'WechatIndexController.getNewProjects',
    //发现页接口
    '/getHistoryEvent': 'WechatIndexController.getHistoryEvent',



  //********   理财产品页    *******


    //理财 有效专区
    '/queryInProgressProjectV8': 'WechatFinancesController.queryInProgressProjectV8',
    //理财 失效专区
    '/moreProject': 'WechatFinancesController.moreProject',
    // 理财页tab显隐
    '/getLable': 'WechatFinancesController.getLable',
    //理财详情页
    '/detailV3': 'WechatFinancesController.detailV3',
    //投资人数列表
    '/projectInvestLog': 'WechatFinancesController.projectInvestLog',
    //立即投资页面 数据
    '/getCouponsForInvest': 'WechatFinancesController.getCouponsForInvest',
    //立即投资
    '/investV2': 'WechatFinancesController.investV2',



  //********    用户    *******
    //获取验证码
    '/getSmsCode': 'WechatUserController.getSmsCode',
    //登录
    '/login': 'WechatUserController.login',
    // 用户信息
    '/userInfos': 'WechatUserController.userInfos',
    //账户信息
    '/userAccountAssets': 'WechatUserController.userAccountAssets',
        //总资产 收益记录
    '/allWaitInterestDetail': 'WechatUserController.allWaitInterestDetail',
    '/allInterestDetail': 'WechatUserController.allInterestDetail',
    //用户红点
    '/redPointV3': 'WechatUserController.redPointV3',
    // 我的消息
    '/personalMessage': 'WechatUserController.personalMessage',

  //投资记录
    //投资中
    '/queryInvestDetailV2': 'WechatUserController.queryInvestDetailV2',
    //投资结束
    '/queryInvestFinishDetailV2': 'WechatUserController.queryInvestFinishDetailV2',
    //投资详情
    '/dueDetail': 'WechatUserController.dueDetail',
    //交易明细
    '/tradeDetail': 'WechatUserController.tradeDetail',

  //我的券包
    //券包红点
    '/checkNewCoupon': 'WechatUserController.checkNewCoupon',
    //红包券
    '/getAllUserRedEnvelope': 'WechatUserController.getAllUserRedEnvelope',
    //加息券
    '/getAllUserInterestCoupon': 'WechatUserController.getAllUserInterestCoupon',
    //现金券
    '/getAllUserInviteCashCoupons': 'WechatUserController.getAllUserInviteCashCoupons',
    // 使用现金券
    '/CashCouponToWallet': 'WechatUserController.CashCouponToWallet',

    // 账户中心
        // 我的银行卡
    '/queryBindBankCard': 'WechatUserController.queryBindBankCard',
            //银行卡列表
    '/getBankList': 'WechatUserController.getBankList',
            //绑卡开户
    '/bindCard': 'WechatUserController.bindCard',
            //绑卡确认
    '/bindCardConfirm': 'WechatUserController.bindCardConfirm',
            //解卡
    '/unBindCard': 'WechatUserController.unBindCard',

        // 退出登录
    '/logout': 'WechatUserController.logout',
        // 上传头像
    '/uploadAvatar': 'WechatUserController.uploadAvatar',
        // common
    // '/getAppConstant': 'WechatUserController.getAppConstant',
        // 眼睛
    '/resetVisualAssets': 'WechatUserController.resetVisualAssets',





  //********   充值提现功能   ********
    //提现的时候弹出的信息
    '/preWithdrawal': 'WechatCapitalController.preWithdrawal',
    //提现说明
    '/getAppConstant': 'WechatCapitalController.getAppConstant',
    //提现获取手机验证码
    '/getTradeSmsCode': 'WechatCapitalController.getTradeSmsCode',
    //确认提现
    '/withdrawal': 'WechatCapitalController.withdrawal',

    //充值页面数据
    '/preRecharge': 'WechatCapitalController.preRecharge',
    //立即充值
    '/recharge': 'WechatCapitalController.recharge',


  //********   签到页面   ********
    //前后三天的积分信息
    '/getUserDailySignValue': 'WechatIndexController.getUserDailySignValue',
    //用户今日是否签到
    '/checkUserSignStatus': 'WechatIndexController.checkUserSignStatus',
    //用户当月已签到的日期
    '/getUserMonthlySignInfo': 'WechatIndexController.getUserMonthlySignInfo',
    //
    '/dailySign': 'WechatIndexController.dailySign',

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

    '/autologin': 'ExchangeController.autologin',
    '/autologinbg': 'ExchangeController.autologinbg',
    '/queryForFrontItem': 'ExchangeController.queryForFrontItem',


    /***************************************************************************
    *                                                                          *
    * 绑卡                                                                      *
    *                                                                          *
    ***************************************************************************/




    '/updateMainBankCard': 'BindCardController.updateMainBankCard',
    '/checkUserBindCard': 'BindCardController.checkUserBindCard'












};
