const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());

const b1router = require('./business-routes/b1-router');
const v1 = require('./libs/validator/user-validator');
const { validationResult } = require("express-validator");
const {pool} = require('./utils/mysql-util');
app.use("/user", v1, (req, resp, next) => {
    console.log(req.body);
    const error = validationResult(req);
    if (!error.isEmpty) {
        resp.send(error);
    } else {
        next();
    }
}, b1router);
// 捕获未处理的Promise拒绝
process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的Promise拒绝:', reason);
});
app.use((err, req, res, next) => {
    // 设置响应的状态码为500
    res.status(500);
   
    // 发送错误信息
    res.send('服务器遇到错误，请稍后再试。');
  });

// 捕获全局同步异常
process.on('uncaughtException', (err) => {
    console.error('捕获到全局异常:', err);
    // 根据错误处理逻辑，可能需要退出进程
    process.exit(1); // 通常用于非恢复性错误
});
app.use("/path2", (req, resp, next) => {
    console.log("path2 in ->", req.body);
    next();
});
app.listen(3001, () => {
    console.log(`Example app listening on port 3001`)
});
