/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
<<<<<<< HEAD
       let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSu41v2mrJiU2iQcusDIgW49hD2+f352rlAJ+NkTCdurBY\nOEmqKfrxyvnzqy4o2fIZ9ckdJz3zGu1/agER4wihmlO20/1tQ5rnAi+Ee1hCN1oPLpyb+Tkl7mVd\nt0jjHkkRLAc89BIvFkKGm3xIlQL3bs7fNiJLVtBKEdII4dvBfpY8p+PgBIRrpG86pZe2QLrtOsA6\nPM8ykuOCMdknYMJXVADu1S76N2n00DtR30JY6bn6VMzTYawbl56OAbXz8k77p+yRLBd2fBNDfI88\nLYUZWoCW+qixx1cUZ1evGyEZwbzN7/rKFB27Zh59zLfVyNtpZoU+VgwBLc/8Jp/pSJH7Qbu3Y13R\nTnOWApDVFBbhqaOhD/0uNttTa/f+aEWHFSefqCXy+Yc8fU/YcckzCdXcDy8GVqG9rg3j+35EoQTg\nptFDXVfa0crND9F/+JWG9p29yN3LYOzBJKJtIBj1bp4l9GK14xDOtkalpEUa71nCwHITgQB+yDR2\njGNbtVE04YNe8hlXELnbJBjinShTB7sk6g==\n"
=======
       let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSu41v2mrJiU2iQcusDIgW49hD2+f352rlAJ+NkTCdurBY\nOEmqKfrxyvnzqy4o2fIZINLM9n6GbTmnCv586cK1Chclz5SYKucNGFrk5jlXbFhZ4MrwD5DEzbr2\nEsfGu6ktVCOSlz6AgBorWI1+2NAcwPKOwK/Jbz+lXSpHIcHOPjqBiI2/nGsGX6nOOMF0Z3HxaIGG\nXpsPtnNHoumYVs4vnwRRv2jBhwyanv5UvIMG66WCkpgPZDAToWqeMqX22R62qVX8MqPAutaTQZij\nc6fNjbewZfgqtI7D56+9sMCK/wBNeTS9SB0zkevl6lED+2MO7+viWqzMtDQj1DFpzzkbHkyDlqVO\nHrML4NfT2x1zD7UDgykSg8hyhYKQqNDW9qtaQvy117Si6qxh1rTj0RN4GwLfem2PQY4ByXxYYQWu\npEtzvwhJ6nLA6QNSRWEwCL8AjbN/GGWod5gRhaAWkSpqh1Mnv9MCaX2g9t/TQtVCFE/nmZs2CTmB\nAk/TkMaG2/PHfwww4tjcBEvXfEGaXHABGUmo3+gbepPA/WlHZxio3texVB98E0MGfeS9ssbHrY/s\n"
>>>>>>> release
       resp = JSON.parse(GlobalMethods.ReleaseToken(body));
       let data = resp.result.token;
       console.log(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugrMYs+9jbMm7+/OoVJmwhaVZ3BNEmmB/MfhGoeLNIaBnQAQn10BdNtSm\nxtuP8OiITODeDYFyAhEuJhr3H8V7zxQJdxA+aD+1Ag==\n"
       console.log(GlobalMethods.ReleaseToken(body));
   },
<<<<<<< HEAD
   encryptToken: function(request, response, callback) {
       let body = "VEtfMjAxNzA2MjAxMjUwMDZfNjYzMzhfMDc5OTYy"
       console.log(GlobalMethods.ReleaseDesToken(body));
   }
=======
   getToken: function(request, response, callback) {
       let body = "VEtfMjAxNzA2MTYxNjI3MDBfNjYzMzRfMDUzMzE0"
       console.log(GlobalMethods.ReleaseDesToken(body));
   },
>>>>>>> release
 };
