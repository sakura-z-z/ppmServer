// var mysql=require("mysql");
// var pool = mysql.creatPool({
//   // host: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com',
//   // host: 'rm-uf6s86ucfa1mvy1m8.mysql.rds.aliyuncs.com',
//   host: GlobalVal.DBVal,
//   user: 'pptang_123',
//   password: 'E8b9J7TjPs0u4Nf',
//   port: '3306',
//   database: 'ppmiao_test',
//   multipleStatements: true
// });
//
// var query=function(sql,options,callback){
//     pool.getConnection(function(err,conn){
//         if(err){
//             callback(err,null,null);
//         }else{
//             conn.query(sql,options,function(err,results,fields){
//                 //释放连接
//                 conn.release();
//                 //事件驱动回调
//                 callback(err,results,fields);
//             });
//         }
//     });
// };
//
// module.exports=query;
