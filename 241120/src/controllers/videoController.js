// Global Router
// const videos = [
//   {
//     id: 1,
//     title: "Frist Video",
//     createdAt: "2 minutes ago",
//     views: 1,
//     comment: 2,
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: "video #2",
//     createdAt: "2 minutes ago",
//     views: 59,
//     comment: 2,
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: "Third Video",
//     createdAt: "2 minutes ago",
//     views: 59,
//     comment: 2,
//     rating: 5,
//   },
// ];

import Video from "../models/video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { docTitle: "Home", videos: videos });
  } catch (err) {
    console.log("error => ", err);
    return res.render("server-error", { err });
  }

  // videoModel.find({}, (err, videos) => {
  //   console.log("errors => ", err);
  //   console.log("videos =>", videos);
  // });
  // videoModel
  //   .find()
  //   .then((videos) => {
  //     console.log("videos =>", videos);
  //     return res.render("home", { docTitle: "Home", videos: [] });
  //   })
  //   .catch((err) => console.log("err", err));
  // console.log("start");
};
export const search = (req, res) => res.send("Search Video");

// Video Router
export const upload = (req, res) => res.send("Upload Video");

export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];

  return res.render("watch", { docTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];

  return res.render("edit", { docTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  videos[id - 1].title = title;
  // console.log(req.body);
  return res.redirect(`/videos/${id}`);
};
// export const getEdit = (req, res) => {};

export const getUplold = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUplold = async (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });

  // const newVideo = {
  //   id: videos.length + 1,
  //   title,
  //   createdAt: "Just Now",
  //   views: 0,
  //   comment: 0,
  //   rating: 0,
  // };
  // videos.push(newVideo);
  const dbVideo = await video.save();
  console.log(dbVideo);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params.id);
  return res.send(`Delete Video : ${id}`);
};
