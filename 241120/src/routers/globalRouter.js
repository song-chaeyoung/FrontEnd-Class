import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

// Global Router
const globalRouter = express.Router();

// const handleHome = (req, res) => {
//   return res.send("Home");
// };

// const handleJoin = (req, res) => {
//   return res.send("Join");
// };

// 함수도 분할 가능
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
