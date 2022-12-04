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

const videoUpload = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 90000000,
  },
});

const movieRouter = express.Router();
movieRouter.get("/", protectorMiddleware, home);
movieRouter
  .route("/add")
  .all(protectorMiddleware)
  .get(getAdd)
  .post(videoUpload.fields([{ name: "movie" }, { name: "img" }]), postAdd);
movieRouter.get("/search", protectorMiddleware, searchMovie);
movieRouter.get("/:id", protectorMiddleware, movieDetail);

export default movieRouter;
