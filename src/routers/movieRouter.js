import express from "express";
import {
  home,
  movieDetail,
  getAdd,
  postAdd,
  searchMovie,
} from "../controls/movieControl.js";
import { protectorMiddleware } from "../middlewares.js";
import multer from "multer";

const textuload = multer({
  dest: "uploads/text/",
  limits: {
    fileSize: 10000000,
  },
});

const movieRouter = express.Router();
movieRouter.get("/", protectorMiddleware, home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.route("/add").get(getAdd).post(textuload.single("html"), postAdd);
movieRouter.get("/search", searchMovie);

export default movieRouter;
