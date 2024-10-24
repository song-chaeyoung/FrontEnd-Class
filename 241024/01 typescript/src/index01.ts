//  외부 API 데이터를 찾아오게 되었을 때, 타입을 지정

// const loading = {
//   state: "Loading",
// };

// const failed = {
//   state: "FAILED",
//   error: {
//     message: "오류 발생...",
//   },
// };

// const success = {
// state: "SUCCESS",
// response: {
//   data: "movie...",
// },
// };

// type AsyncTask = {
//   state: "Loading" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type LoadingTask = {
  state: "Loading";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: "오류 발생...";
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: "movie...";
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "Loading": {
      console.log("로딩중...");
      break;
    }
    case "FAILED": {
      console.log(`에러발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
};
