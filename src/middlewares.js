export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Nomad Users";
  next();
};
export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
