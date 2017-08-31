/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSHthd3b2V1VuPKL+BF+CDuus4DKBlkjfx6bXy/nN0ZeQu\n7nTSMeIhe7W5kp2jtXbYvdkWRHHO377j0pj+YIuCCXSf41tDN7yodC8HmpqXtiDnfOzFRnb5e9T5\nekJdmNOQkSm++qdYNYW9m4vo/CG11x29mN0AkWFND9WgBePD0lg+gy9jrY2hQJYp9QWchSp84r0x\n4zL2Tik0jo9urj4kurINGaDA9QKoFGRDgdN28lC7/xJQgGyKeeFXFTIHmr/mISivrS2R9kblFno0\nTrCBfWi7VstFZhridzVyBAKnIhQMR2mtv8aFXCLQA6tGslif98xwebDe0pXDr/VO2dv0GOeFZC/S\nE+37RswjF9Fv8zmZayhrNRUiJvsyKYxC+YNTcsPsH63nddmR1WoTvR9kwhobi++FqXIyR91NikN7\nWuNTcGlfbg+DcNpUaAk0hKK1MtsEnkI0eSPetCDoDdBhnNnuHmjYV1ATvDsvbqnSDggpSsgzLE3P\ng2HhKZ/JrmYrqkuYkcx7RkxhJ5GvmwiGxsn8NQLEjkYjiu9Oh4Q4PGS0H1uVeFg/SU8+Q0q8pxUI\nn4CFHREg9CiCRpwViKW5YTFkkLNWtqUYFZyuIBBTQQiMJmJ6nL8uNJBbEM4qfypx\n"
       resp = JSON.parse(GlobalMethods.ReleaseToken(body));
       let data = resp.result.token;
       console.log(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugrMYs+9jbMm7+/OoVJmwhaVZ3BNEmmB/MfhGoeLNIaBnQAQn10BdNtSm\nxtuP8OiITODeDYFyAhEuJhr3H8V7zxQJdxA+aD+1Ag==\n"
       console.log(GlobalMethods.ReleaseToken(body));
   },
   encryptToken: function(request, response, callback) {
       let body = "VEtfMjAxNzA3MjExNTA0MTFfNjY0NDdfMDM2OTE3"
       console.log(GlobalMethods.ReleaseDesToken(body));
   }
 };
