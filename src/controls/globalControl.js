import Movie from "../models/Movie.js";
export const homeControl = async (req, res) => {
  const movies = await Movie.find({});
  return res.render("home", { movies });
};
