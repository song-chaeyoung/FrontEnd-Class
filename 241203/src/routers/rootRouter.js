import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";

// Global Router
const rootRouter = express.Router();

// const handleHome = (req, res) => {
//   return res.send("Home");
// };

// const handleJoin = (req, res) => {
//   return res.send("Join");
// };

// 함수도 분할 가능
rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
