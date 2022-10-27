import express from "express";
import { homeControl } from "../controls/globalControl.js";

const globalRouter = express.Router();

globalRouter.get("/", homeControl);

export default globalRouter;
