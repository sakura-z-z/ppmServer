/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSpF/jAuqpco1dlMHN2r1GRjA9kiR/SUzNnR6slJJOnoO7\nfxh25Pjn5wl2R7XdwvJHcjtyIrfCu/NWMgk3KGOCVmq6YKKvnyfru2KcCHKo0Iug8J8KBn4J/Pmy\nk0SxfqohSqIEVrzRdfppBaaaZ72ID9liM95aw3KYA4S38VHcBE/X6+ZkqtC99Qsn6NEfSe7oWnXC\nYZbMyld8/srAND2Mv/P804aVTz6XwnPB0Sc41h2wQi2Rxvh/FopcND/Fbg29efhSQUfMXKu+NK34\n32ct4pTNb34Ac07CQp08ydisi0FUDdW4SpHa5nGC21F46PHcGjZe/elFYFar0WjmjB4thfaBslc+\nYfzgOxYA1Elc3vXtItKKK3GPydLqthKMTT/HHS24itx77Lr85Qd8R6adA5LJJLDuoiUE7gBrAHyU\n06XvrNmL16Khh9MbTYbTwikGK2dRTo7confpDMXQe28RfGScswV1JPjdzP0pqVjJigDzsvz7pRa2\nWVqDd9potOXwVG43pU9edqhcrtEBCuA/gzJ9uqtQMolzzJyEhzCnPmVxfV4udv9u52iqvSYOksdW\nPfDGdkZB/AI=\n"
       resp = JSON.parse(GlobalMethods.ReleaseToken(body));
       let data = resp.result.token;
       console.log(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugrMYs+9jbMm7+/OoVJmwhaVZ3BNEmmB/MfhGoeLNIaBnQAQn10BdNtSm\nxtuP8OiITODeDYFyAhEuJhr3H8V7zxQJdxA+aD+1Ag==\n"
       console.log(GlobalMethods.ReleaseToken(body));
   },
   getToken: function(request, response, callback) {
       let body = "VEtfMjAxNzA2MTYxNjI3MDBfNjYzMzRfMDUzMzE0"
       console.log(GlobalMethods.ReleaseDesToken(body));
   },
 };
