import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  title: String,
  summary: String,
  path: String,
  img_path: String,
  genres: [String],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const Movie = mongoose.model("Movie", UserSchema);

export default Movie;
