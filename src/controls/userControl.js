import User from "../models/User.js";
export const user = async (req, res) => {
  await User.create({
    name: "dddd",
    age: 30,
    location: "dadfafd",
  });
  return res.render("user");
};
export const userEdit = (req, res) => res.render("userEdit");
