/**
 * DBController
 *
 * @description :: Server-side logic for managing DBS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var http = require('http');
 var querystring = require('querystring');
 var mysql = require('mysql');  
module.exports = {
    userType: function(request, response, callback) {
    console.log(request.body.type);
    }
};
