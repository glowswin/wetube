import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  userid: String,
  name: String,
  pass: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);

export default User;
