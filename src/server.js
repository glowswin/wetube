import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";

const app = express();
const loggerMid = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
};
const timeMid = (req, res, next) => {
  var date = new Date();
  console.log(
    `Time: ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  );
  next();
};
const securityMid = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("Secure");
  } else {
    console.log("Insecure");
  }
  next();
};
const protectorMid = (req, res, next) => {
  if (req.path === "/protected") {
    return res.send("no auth");
  }
  next();
};
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("combined"));
app.use(loggerMid);
app.use(timeMid);
app.use(securityMid);
app.use(protectorMid);
app.use("/", globalRouter);

app.listen(3000, () => console.log("express 3000 listen"));
