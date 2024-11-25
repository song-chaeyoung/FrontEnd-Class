import express from "express";
import {
  deleteVideo,
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

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
