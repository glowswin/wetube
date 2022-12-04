import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  userid: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  pass: { type: String, required: true },
  age: { type: Number, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

const User = mongoose.model("User", UserSchema);

export default User;
