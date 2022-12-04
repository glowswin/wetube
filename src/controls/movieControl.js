import Movie from "../models/Movie.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

export const home = async (req, res) => {
  const movies = await Movie.find({});
  return res.render("index", { movies });
};
export const movieDetail = async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id).populate({
    path: "comments",
    populate: {
      path: "owner",
    },
  });
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};
export const getAdd = (req, res) => {
  return res.render("add", { pageTitle: "동영상 업로드" });
};

export const postAdd = async (req, res) => {
  const {
    user: { _id },
  } = req.session;
  const { movie, img } = req.files;
  const { title, summary, genres } = req.body;
  const genress = genres.split(",");
  const newMovie = await Movie.create({
    title,
    summary,
    path: movie[0].path,
    img_path: img[0].path,
    genres: genress,
    owner: _id,
  });
  const user = await User.findById(_id);
  user.movies.push(newMovie._id);
  user.save();
  return res.redirect("/");
};
export const searchMovie = async (req, res) => {
  const { searchText } = req.query;
  let movies = [];
  if (searchText) {
    movies = await Movie.find({
      title: {
        $regex: new RegExp(`${searchText}$`, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "동영상 검색", movies });
};
export const postComment = async (req, res) => {
  const {
    user: { _id },
  } = req.session;
  const id = req.params.id;
  const { comment } = req.body;
  const newComment = await Comment.create({
    comment,
    ownvideo: id,
    owner: _id,
  });
  const movie = await Movie.findById(id);
  movie.comments.push(newComment._id);
  movie.save();
  const user = await User.findById(_id);
  user.comments.push(newComment._id);
  user.save();
  return res.redirect("/movies/" + id);
};
