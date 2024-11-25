import "./db";
import videoModel from "./models/video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import usersRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// const PORT = 4000;

// console.log(process.cwd());

const app = express();
const logger = morgan("combined");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", usersRouter);
app.use("/videos", videoRouter);

// const handleHome = (req, res, next) => {
//   // return res.send("<h1 >I still love you</h1>");
//   console.log(`method : ${req.method}, ${req.url}`);
//   return res.end();
// };

// const middleWare = (req, res, next) => {
//   // console.log("I'm in the Mioddle");
//   next();
// };

// const privateMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }

//   console.log("Allowed, You may contiune");
//   next();
// };

// const handleProtect = (req, res) => {
//   return res.send("Welcome to the Private Lounage");
// };

// app.use(morganMiddleWare);
// app.use(privateMiddleware);
// app.get("/", handleHome);
// app.get("/protected", handleProtect);

// const handleListening = () =>
//   console.log(`Server Listening on Port http://localhost:${PORT}`);

// app.listen(PORT, handleListening);

export default app;
