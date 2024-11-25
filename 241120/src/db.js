import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/nodejs`);

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to MongoDB👌");
const handleErr = (err) => console.log("db error =>", err);

db.on("error", handleErr);
db.once("open", handleOpen);
