const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const fs = require("fs");
const router = require("./router/index");
const qrappcg = require("./router/qrappcg");
const smbpappslf = require("./router/smbpappslf");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/index", router);
app.use("/qrappcg/groupchat", qrappcg);
app.use("/smbpappslf", smbpappslf);
app.use("/shelfmgr", require("./router/shelfmgr"));
app.use("/sjt", require("./router/sjt"));
app.use("/shelfcomm", require("./router/shelfcomm"));
app.use("/recipt_accessit", require("./router/recipt_accessit/shelfmgr"));

//设置跨域访问
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  // const os = require("os");

  console.log("已启动监控 端口", port);
});
