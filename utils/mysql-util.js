
const mysql = require('mysql');
const sqlconfig = require('../config/sqlconfig');
// 方式2   使用连接池 pool.createPool()
let pool = mysql.createPool(sqlconfig);

const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        //连接错误
        reject(err);
      } else {
        resolve(conn);
      }
    })
  }) 
}
const queryDB = (sql, values, conn) => {
  return new Promise((resolve, reject) => {
    conn.query(sql,values, (err, data) => {
      if (err) {
        //操作失败
        reject({conn, err})
      } else {
        resolve({conn, data})
      }
      // 当连接不再使用时，用conn对象的release方法将其归还到连接池中
      conn.release();
    })
  });
}
const commitDB = (conn, data) => {
  return new Promise((resolve, reject) => {
    conn.commit((error) => {
      reject(error);
    });
    resolve(data);
  });
}
const execSql = (sql,values,ifTx=false) => {
  return getConnection()
      .then((conn) => queryDB(sql, values, conn))
      .then((resp) => commitDB(resp.conn, resp.data))
      .catch((resp) => {
        const conn = resp.conn;
        if (ifTx) {
          conn.rollback(function(error) {
            throw error;
          });
        }
        console.log(resp.err);
      });
}
module.exports = {
    pool,
    execSql
};