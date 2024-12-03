import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    uppercase: true,
    maxLength: 80,
    required: true,
  },
  description: { type: String, required: true, minLength: 5 },
  createdAt: { type: Date, required: true, default: Date.now() },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

// export const formHashtags = (hashtags) => {
//   return hashtags
//     .split(",")
//     .map((tag) => (tag.startsWith("#") ? tag : `#${tag}`));
// };

videoSchema.static("formatHashtags", (hashtags) => {
  return hashtags
    .replace(/\s/g, "")
    .split(",")
    .map((tag) =>
      tag.startsWith("#")
        ? tag
        : `
#${tag}`
    );
});

// videoSchema.pre("save", async function () {
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map((tag) => (word.startsWith("#") ? word : `#${word}`));
// });

const Video = mongoose.model("Video", videoSchema);

export default Video;
