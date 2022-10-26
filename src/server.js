import express from "express";

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
app.use(loggerMid);
app.use(timeMid);
app.use(securityMid);
app.use(protectorMid);
const homeRouter = (req, res) => res.send("<h1>home</h1>");
const aboutRouter = (req, res) => res.send("<h1>about</h1>");
const contactRouter = (req, res) => res.send("<h1>contact</h1>");
const loginRouter = (req, res) => res.send("<h1>login</h1>");

app.get("/", homeRouter);
app.get("/about", aboutRouter);
app.get("/contact", contactRouter);
app.get("/login", loginRouter);

app.listen(3000, () => console.log("express 3000 listen"));
