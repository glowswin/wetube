import User from "../models/User.js";
export const user = async (req, res) => {
  return res.render("user");
};
export const userEdit = (req, res) => res.render("userEdit");
