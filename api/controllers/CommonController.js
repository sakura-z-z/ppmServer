/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSu41v2mrJiU2iQcusDIgW49hD2+f352rlAJ+NkTCdurBY\nOEmqKfrxyvnzqy4o2fIZNRo449+NnUgYdj27lsMN7R+qNQEqg3vq+2nj9e4dqqeAIQJRX/+I7M9A\nfRCXQQr1shXM3guL5kh4MInBVIpgRSAyzUyO38ehL3fi6PPzJDhQMxi5AqFbv2WBBT/gMmsCOdvR\n9DKvwBBFjS+Ao3BHUX36H1mmKoTeKHMTjLPt30WIqfbAAKTfNl2yrMEndEMIgLR2Fpq+zLEU2pOW\nuLoy5wmN8TNYyhU9aIrdC2hNGgebajLIuZta0D1XdyMGmdBOh0H48dMoeqMx9iIggsSEzbc5R7B0\nqlc0SZcr+e3Kmr46DPcnWoUapLu6fCvNd7qmX8tDtwkWXb7YuB+PrO7Dx0BW7wgYbBIIwStJKCR2\nI0Ynh8E3cwaUAJx37gRv9XJWJQHGBop0wZ61RaXY7N4hAMwxzY9ReMmrx0nNBSEjA3kTmMOA8mpa\nRyQaZCdwArUjXOd7ecYLE3+xbw5mxmkwAQ==\n"
       resp = JSON.parse(GlobalMethods.ReleaseToken(body));
       let data = resp.result.token;
       console.log(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugrMYs+9jbMm7+/OoVJmwhaVZ3BNEmmB/MfhGoeLNIaBnQAQn10BdNtSm\nxtuP8OiITODeDYFyAhEuJhr3H8V7zxQJdxA+aD+1Ag==\n"
       console.log(GlobalMethods.ReleaseToken(body));
   },
   encryptToken: function(request, response, callback) {
       let body = "VEtfMjAxNzA2MjcxNzAzMzZfNjYzNDFfMTI3NDIw"
       console.log(GlobalMethods.ReleaseDesToken(body));
   }
 };
