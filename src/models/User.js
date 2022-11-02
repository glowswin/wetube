import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  location: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
