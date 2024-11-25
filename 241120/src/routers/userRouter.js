import express from "express";
import { edit, logout, remove, see } from "../controllers/userController";

const usersRouter = express.Router();

// const handleEditUser = (req, res) => {
//   return res.send("EditUser");
// };

// const handleDeleteUser = (req, res) => {
//   return res.send("Delete User");
// };

usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/delete", remove);
usersRouter.get("/:id", see);

export default usersRouter;
