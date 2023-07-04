var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const categoriesRouter = require("./app/api/v1/categories/routes");
const subCategoriesRouter = require("./app/api/v1/sub-categories/routes");

const errorHanlderMiddleware = require("./app/middleware/handler-error");

const v1 = "/api/v1/cms";
var app = express();

// view engine setupw

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/", (_, res) => {
//   res.send({
//     message: "berhasil",
//   });
// });

app.use(v1, categoriesRouter);
app.use(v1, subCategoriesRouter);

app.use(errorHanlderMiddleware);

module.exports = app;
