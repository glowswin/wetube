import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true, trim: true },
  path: { type: String, required: true },
  img_path: { type: String, required: true },
  genres: [String],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const Movie = mongoose.model("Movie", UserSchema);

export default Movie;
