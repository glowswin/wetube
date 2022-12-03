import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import session from "express-session";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import movieRouter from "./routers/movieRouter.js";
import { localsMiddleware } from "./middlewares.js";

const app = express();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/movies", movieRouter);

export default app;
