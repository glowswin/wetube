import express from "express";
import { user, userEdit } from "../controls/userControl.js";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", user);
userRouter.get("/edit-profile", userEdit);

export default userRouter;
