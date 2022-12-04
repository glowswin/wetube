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
  return res.render("add", { pageTitle: "동영상 업로드" });
};

export const postAdd = async (req, res) => {
  const { movie, img } = req.files;
  const { title, summary, genres } = req.body;
  const genress = genres.split(",");
  await Movie.create({
    title,
    summary,
    path: movie[0].path,
    img_path: img[0].path,
    genres: genress,
  });
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
