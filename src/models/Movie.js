import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  title: String,
  summary: String,
  path: String,
  img_path: String,
  genres: [String],
});

const Movie = mongoose.model("Movie", UserSchema);

export default Movie;
