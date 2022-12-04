import express from "express";
import {
  user,
  userEdit,
  home,
  login,
  postLogin,
  join,
  postJoin,
  logout,
  postEdit,
} from "../controls/userControl.js";
import { protectorMiddleware } from "../middlewares.js";

const userRouter = express.Router();

userRouter.get("/", protectorMiddleware, home);
userRouter.get("/:id(\\d+)", user);
userRouter.route("/edit-profile").get(userEdit).post(postEdit);
userRouter.route("/login").get(login).post(postLogin);
userRouter.route("/join").get(join).post(postJoin);
userRouter.get("/logout", logout);

export default userRouter;
