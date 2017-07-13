/**
 * CommonController
 *
 * @description :: Server-side logic for managing Commons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getDesToken: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugud1AxGR9QqSrPhl22jdNnsaUr78NvaxzSQOsTt+WOrEzBVjf/Wztxwt\nabiRD+2nnPwWdDKv0JegQiUMJrDqkS2HbZekE3O7/IipJAAS9sipYpXsDkR/yq+1POTM08AzbUDb\n8nBxdPVjJznIH/gIeT4xBDB9JO1zbaOldwtmKIxW0q0/tNLniHjdmusyc/Ly8pg8psK+kbwmHkoy\nctMMTYHZwVwehs1hXNFNTkaOf+QUiTsUCi8mzOWkMJ6q44VsMFMtCiMWte7irGs+BQivKJFjZqor\nBFNYpcELzOgzhYMJfL6Uv1wmPoiertYwxxqstrAr0lFXB5lpZcXoL3yebRg6uON0yyf3JyYBVmqK\nmRku/IHsARl79wSyh8WeNUIOtS1eWK7PSk2mRQnm4ZiyyEYEcb/bEDSXbrUZvZdqsZgv/h6lXOmu\nzwJ9UQLlqHZ9Rv8fv96rfHFZK4xpf/thd52UVoQ7dhpQ43EDaKWkqjz1Rh7J0FnS7vhPBahbGWu+\nrPn4l5Wcql1UqMjRvQPRxRVVwAkLUJQOoSqQUHeRN5RbzFFeRbaZY/0lIY3HGsmVYibQAyW0H9RK\nu7pqJbjwD44=\n"
       resp = JSON.parse(GlobalMethods.ReleaseToken(body));
       let data = resp.result.token;
       console.log(GlobalMethods.ReleaseDesToken(data));
   },
   getPhone: function(request, response, callback) {
       let body = "eyqHDoeDrIra8sRTOHhugrMYs+9jbMm7+/OoVJmwhaVZ3BNEmmB/MfhGoeLNIaBnQAQn10BdNtSm\nxtuP8OiITODeDYFyAhEuJhr3H8V7zxQJdxA+aD+1Ag==\n"
       console.log(GlobalMethods.ReleaseToken(body));
   },
 };
