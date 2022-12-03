import express from "express";
import {
  user,
  userEdit,
  home,
  login,
  postLogin,
  join,
  postJoin,
} from "../controls/userControl.js";
import { protectorMiddleware } from "../middlewares.js";

const userRouter = express.Router();

userRouter.get("/", protectorMiddleware, home);
userRouter.get("/:id(\\d+)", user);
userRouter.get("/edit-profile", userEdit);
userRouter.route("/login").get(login).post(postLogin);
userRouter.route("/join").get(join).post(postJoin);

export default userRouter;
