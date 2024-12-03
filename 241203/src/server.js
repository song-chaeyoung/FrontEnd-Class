import "./db";
import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import usersRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";

// const PORT = 4000;

// console.log(process.cwd());

const app = express();
const logger = morgan("combined");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
// 세션정의
app.use(
  session({
    secret: "Hello",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/nodejs" }),
  })
);
// app.get("/add-one", (req, res, next) => {
//   req.session.specialUser += 1;
//   return res.send(`${req.session.id}`);
// });
app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/users", usersRouter);
app.use("/videos", videoRouter);
export default app;

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

// 참고
// import express from "express";
// import morgan from "morgan";
// import { rootRouter } from "./routers/rootRouter";
// import { userRouter } from "./routers/userRouter";
// import { videoRouter } from "./routers/videoRouter";
// import session from "express-session";
// import { localsMiddleware } from "./middlewares";
// const app = express();
// const log = morgan("dev");
// app.set("view engine", "pug");
// app.set("views", process.cwd() + "/src/views");
// app.use(log);
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: "hello",
//     //특정 시간이 지나면 세션데이터를 업데이트 시킴.
//     //유저가 오지않아도 계속 데이터가 업데이트 되므로 조금 비효율적일 수 있음.
//     resave: true,
//     //실행(init)이 되기 전까지도 세션데이터를 저장시킴, 초기화되지 않은 세션이더라도 데이터들을 저장시킴
//     saveUninitialized: true,
//   })
// );
// app.use(localsMiddleware);
// // app.get("/add-one", (req, res) => {
// //   //의도적으로 클라이언트를 여러명있다고 알리기 위해, 실상은 1명
// //   //근데 얘가 있다고 왜 재시작하면 세션 아이디가 달라지는거지? 그리고 왜 갑자기 또 아이디가 안바뀌는거지
// //   req.session.specialUser += 1;
// //   return res.send(`${req.session.id}`);
// // });
// //글로벌라우터는 항상 밑에 둬야해
// app.use("/", rootRouter);
// app.use("/users", userRouter);
// app.use("/video", videoRouter);
// export default app;
