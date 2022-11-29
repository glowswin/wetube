import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  pass: String,
  age: Number,
  location: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
