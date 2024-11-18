const { body } = require("express-validator");
// Validate and sanitize fields.
module.exports = [
    body("password", "password must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
];
