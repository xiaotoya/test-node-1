const { body } = require("express-validator");
// Validate and sanitize fields.
module.exports = [
    body("username", "username must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape()
];
