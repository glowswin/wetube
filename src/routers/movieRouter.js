import express from "express";
import {
  home,
  movieDetail,
  getAdd,
  postAdd,
  filterMovie,
} from "../controls/movieControl.js";

const movieRouter = express.Router();
movieRouter.get("/", home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.route("/add").get(getAdd).post(postAdd);
movieRouter.get("/filter", filterMovie);

export default movieRouter;
