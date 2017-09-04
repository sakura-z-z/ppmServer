/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
    //    let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSAbbws0Wq89qhSkzvfaVQIue14O96+fabqBU85DuIntXD\nidqZKJvYXORi8bt+E1EXgjtFl5CD3QTdX2VmF5NfB8ctS9EeRNiBPmwPE20a46uTmNI2jTQNbE7c\neSVlxc0ZW8XQa+SG4VRrghFrTMlMBp3k5x8p2MMKQsW7zeeY6+wB2CzA9dRpLevZNc+qfG2IvgZj\nKzCOUU2Sn82rXE6CFsRzIEAZf8GLrwWZJK+pWY4jPf079T8HMNLw8oBOi6uNDU64h+h+UM9Dkyj4\nxIXQItmsgZCv/+4in792IwJ/nJr+Qj2IC1SrOBieZ5ueTvLICxo06XhqgIv8cgUxK+HtrKwGyASE\nkiymDq1S+g7rUWWxGmI2b7jMjF/Bf9K1EPT07aM63b1hcDiNEpnkVfHe7qYXrPvlK3KDwUzwwvri\nXFYWcX137rzX7NSGi72yu5wkbWBy2leg/946IZrDe98tKMLJ1d+oM25cGKEwfi/VgMlYsmSYhnPB\njaofv8DXYh7rVXt1gaXxhBM=\n";

       let istoken = request.body.istoken;
       console.log(istoken);
       let body = istoken;

       resp = JSON.parse(GlobalMethods.ReleaseToken(body));
       let data = resp.result.token;
       console.log(GlobalMethods.ReleaseDesToken(data));
       response.send(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
    //    let body = "eyqHDoeDrIra8sRTOHhugrMYs+9jbMm7+/OoVJmwhaVZ3BNEmmB/MfhGoeLNIaBnQAQn10BdNtSm\nxtuP8OiITODeDYFyAhEuJhr3H8V7zxQJdxA+aD+1Ag==\n"
    let istoken = request.body.istoken;
    let body = istoken;
       console.log(GlobalMethods.ReleaseToken(body));
       response.send(GlobalMethods.ReleaseDesToken(data));
   },
   encryptToken: function(request, response, callback) {

        let istoken = request.body.istoken;
        // console.log(istoken);
        let body = istoken;
        // let body = "VEtfMjAxNzA2MjcxNzAzMzZfNjYzNDFfNTUwMDc5";

        // console.log(GlobalMethods.ReleaseDesToken(body));
        response.send(GlobalMethods.ReleaseDesToken(body));
   }
 };
