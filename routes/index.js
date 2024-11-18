const express = require("express");
const app = express();
app.use('/path1/b1', (req, resp, next) => {
    console.log('b1 -> ');
    next();
}, );

module.exports = app;
