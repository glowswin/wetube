import Movie from "../models/Movie.js";

export const home = async (req, res) => {
  const movies = await Movie.find({});
  return res.render("index", { movies });
};
export const movieDetail = async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};
export const getAdd = (req, res) => {
  return res.render("add");
};

export const postAdd = async (req, res) => {
  const { title, summary, genres } = req.body;
  const genress = genres.split(",");
  await Movie.create({ title, summary, genres: genress });
  return res.redirect("/");
};
export const filterMovie = async (req, res) => {
  const { year, rating } = req.query;
  let movies;
  if (year) {
    movies = await Movie.find({ year });
  } else if (rating) {
    movies = await Movie.find({ rating });
  }
  return res.render("filter", { year, rating, movies });
};
