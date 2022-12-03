import User from "../models/User.js";
import bcrypt from "bcrypt";
export const user = async (req, res) => {
  return res.render("user");
};
export const userEdit = (req, res) => res.render("userEdit");
export const home = (req, res) => {
  const user = req.session.user;
  return res.render("userInfo", { pageTitle: "홈", user });
};

export const login = (req, res) => res.render("login", { pageTitle: "로그인" });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "로그인";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "사용자가 없습니다.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "비밀번호가 틀렸습니다.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const join = (req, res) => res.render("join", { pageTitle: "회원가입" });

export const postJoin = async (req, res) => {
  const { username, password, passwordConfirm, name, age } = req.body;
  const pageTitle = "회원가입";
  if (password !== passwordConfirm) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "비밀번호가 일치하지 않습니다.",
    });
  }
  const exists = await User.exists({ username });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "이미 사용 중인 사용자이름입니다.",
    });
  }
  try {
    parseInt(age);
  } catch {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "나이는 숫자로 입력해주세요.",
    });
  }
  let encpassword = await bcrypt.hash(password, 5);
  try {
    await User.create({
      username,
      password: encpassword,
      name,
      age,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "회원가입",
      errorMessage: error._message,
    });
  }
};
