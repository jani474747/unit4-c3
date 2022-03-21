const express = require("express");

const userController = require("./src/controllers/user.controller");
const bookController = require("./src/controllers/book.controller");
const commentController = require("./src/controllers/comment.controller");

const app = express();

app.use("/user", userController);
app.use("/book", bookController);
app.use("/comment", commentController);

module.exports = app;
