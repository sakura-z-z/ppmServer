/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSMaN5t42i4C5ohjD6ianKaIc/iHAKsIDsYNBY+Ediq/xY\no5Or9gymwThyLG9l93xvf7MoWapnGiqo/bvSDEx6v0stwH5H6YLrCUNQ556r15L7j3x7oLWYxjjl\nBR0WBPfjCbxLBzZUTUq7QJrHD2Wjn9ZzieZuUv3zTeFXMXJ4VJ1hfhYzFVJAR8Eq9aa+EV40+PLj\nzRvN3BQvDupPOVe2fOnGCpzCZiqKT/MPl0N1wq5D95HGQDRFmU6YwPzXcNzr/uvPGv8+LykKCX3c\ncCklkG2eeWGXREU3r7+Nfceax/bdJg1p/7xrlee9VYuBxln4eu0seFK8/7xWIhcY7SHifvIny79S\nMikfAa0nNtj1NrtKmnc0epLsBaXk2qtwvd9aG9Y7HHbmZA8PhJN/kwz6K+RNmVsE/BrV/k+yDzmR\n91Td4AaU0OoPe1evIyEEWH4/LB50r0E1dArkUmbqC1UzsDe0UBP0NWEXgU3XSX/RItI=\n"
       resp = JSON.parse(GlobalMethods.ReleaseToken(body));
       let data = resp.result.token;
       console.log(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugrMYs+9jbMm7+/OoVJmwhaVZ3BNEmmB/MfhGoeLNIaBnQAQn10BdNtSm\nxtuP8OiITODeDYFyAhEuJhr3H8V7zxQJdxA+aD+1Ag==\n"
       console.log(GlobalMethods.ReleaseToken(body));
   },
 };
