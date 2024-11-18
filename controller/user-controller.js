const {execSql} = require('../utils/mysql-util');
const usercontroller = async (req, resp, next) => {
    console.log("API请求: ");
    const sqlContent = 'select * from t_position where id=?';
    const result = await execSql(sqlContent, [4]);
    throw 'An error occurred';
    resp.send(result);
}
module.exports.usercontroller = usercontroller;
