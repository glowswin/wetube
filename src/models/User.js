import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  userid: String,
  name: String,
  pass: String,
  age: Number,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

const User = mongoose.model("User", UserSchema);

export default User;
