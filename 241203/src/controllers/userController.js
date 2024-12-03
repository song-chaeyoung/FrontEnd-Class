import User from "../models/user";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { docTitle: "Join" });

export const postJoin = async (req, res) => {
  const { email, username, password, password1, name, location } = req.body;
  // const usernameExists = await User.exists({ username });
  const docTitle = "Join";
  const exists = await User.exists({ $or: [{ username }, { email }] });

  if (password !== password1)
    return res.status(400).render("join", {
      docTitle,
      errorMessage: "Password confirmation does not match",
    });

  if (exists) {
    return res.status(400).render("join", {
      docTitle,
      errorMessage: `This username/email is already taken`,
    });
  }

  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });

    return res.redirect("/login");
  } catch (err) {
    return res.status(400).render("join", {
      docTitle,
      errorMessage: err._message,
    });
  }

  // if (usernameExists) {
  //   return res.render("join", {
  //     docTitle,
  //     errorMessage: "This username is already taken",
  //   });
  // }

  // const emailExists = await User.exists({ email });
  // if (emailExists) {
  //   return res.render("join", {
  //     docTitle,
  //     errorMessage: "This email is already taken",
  //   });
  // }
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");

export const getLogin = (req, res) =>
  res.render("login", {
    docTitle: "Login",
  });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const docTitle = "Login";

  if (!user) {
    return res.status(400).render("login", {
      docTitle,
      errorMessage: "An account with this username does not exits",
    });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      docTitle,
      errorMessage: "Wrong Password.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const logout = (req, res) => res.send("Logout User");
export const see = (req, res) => res.send("Modify User");
