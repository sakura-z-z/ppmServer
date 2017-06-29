/**
 * BindCardController
 *
 * @description :: Server-side logic for managing bindcards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getBanklist: function(request, response, callback) {
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/getAllBindCardInfo.json');
    },
};
