// export const localMiddleWare = (res, req, next) => {
//   res.locals.loggedIn = Boolean(req.session.loggedIn);
//   res.locals.siteName = "Youtube";
//   res.locals.loggedInUser = req.session.user;
//   console.log(req.session);
//   next();
// };

export const localMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube";
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
