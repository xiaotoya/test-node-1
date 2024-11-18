const express = require('express');
const router = express.Router();
const { validationResult } = require("express-validator");
const v2 = require('../libs/validator/user-validator2');
const {usercontroller} = require('../controller/user-controller');
router.post('/', v2, (req, resp, next) => {
    if (!validationResult(req).isEmpty) {
        resp.send("Errorv2");
    } else {
        console.log("Add = ", req.body);
        next();
    }
}, usercontroller);

module.exports = router;