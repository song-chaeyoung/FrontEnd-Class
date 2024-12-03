import express from "express";
import {
  deletevideo,
  getEdit,
  postEdit,
  upload,
  watch,
  postUplold,
  getUplold,
} from "../controllers/videoController";

const videoRouter = express.Router();

// const handleWatch = (req, res) => {
//   return res.send("Watch Video");
// };

// const handleEdit = (req, res) => {
//   return res.send("Edit Video");
// };

// const handleVideoDelete = (req, res) => {
//   return res.send("Delete Video");
// };

// videoRouter.get("/delete", handleVideoDelete);

// videoRouter.get("/upload", upload);
videoRouter.route("/upload").get(getUplold).post(postUplold);

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete", deletevideo);

export default videoRouter;
