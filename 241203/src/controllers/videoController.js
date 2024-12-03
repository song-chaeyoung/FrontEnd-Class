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

import Video, { formHashtags } from "../models/video";

// export const home = async (req, res) => {
//   try {
//     const videos = await Video.find({});
//     return res.render("home", { docTitle: "Home", videos: videos });
//   } catch (err) {
//     console.log("error => ", err);
//     return res.render("server-error", { err });
//   }
// };

export const home = async (req, res) => {
  try {
    // find({}); 특정조건 없이 찾아와라.
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    return res.render("home", { docTitle: "Home", videos });
  } catch (error) {
    return res.render("server-error", { error });
  }
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];

  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(`${keyword}$`, "i"),
      },
    });
    console.log(videos);
  }
  return res.render("search", { docTitle: "Search", videos });
  // return res.render("search", { docTitle: "Search" });
};

// Video Router
export const upload = (req, res) => res.send("Upload Video");

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  if (!video) {
    return res.render("404", { docTitle: "Video not found." });
  }
  return res.render("watch", { docTitle: `${video.title}`, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  if (!video) {
    return res.render("404", { docTitle: "Video not found." });
  }

  return res.render("edit", { docTitle: `Edit : ${video.title} `, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });

  if (!video) {
    return res.render("404", { docTitle: "Video not found." });
  }

  await Video.findByIdAndUpdate(id, {
    title,
    description,
    // hashtags: formHashtags(hashtags),
    hashtags: Video.formatHashtags(hashtags),
  });

  // video.title = title;
  // video.description = description;
  // video.hashtags = hashtags
  //   .split(",")
  //   .map((word) => (word.startsWith("#") ? word : `#${word}`));
  // await video.save();
  return res.redirect(`/videos/${id}`);
};
// export const getEdit = (req, res) => {};

export const getUplold = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUplold = async (req, res) => {
  const { title, description, hashtags } = req.body;

  try {
    await Video.create({
      title,
      description,
      // hashtags: formHashtags(hashtags),
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (err) {
    // console.log("error 발생 =>", err);

    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: err._message,
    });
  }

  // const video = new Video({
  //   title,
  //   description,
  //   createdAt: Date.now(),
  //   hashtags: hashtags.split(",").map((word) => `#${word}`),
  //   meta: {
  //     views: 0,
  //     rating: 0,
  //   },
  // });

  // const newVideo = {
  //   id: videos.length + 1,
  //   title,
  //   createdAt: "Just Now",
  //   views: 0,
  //   comment: 0,
  //   rating: 0,
  // };
  // videos.push(newVideo);
  // const dbVideo = await video.save();
  // console.log(dbVideo);
  // return res.redirect("/");
};

export const deletevideo = async (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  // console.log(id);
  await Video.findByIdAndDelete(id);
  // findByIdAndDelete() : mongoDB 안에 있는 데이터를 ID값을 기준으로 찾아서 자동으로 삭제해주는 미들웨어 함수
  return res.redirect("/");
};
