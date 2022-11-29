import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  title: String,
  summary: Number,
  path: String,
  year: Number,
  genres: [String],
});

const Movie = mongoose.model("Movie", UserSchema);

export default Movie;
