// 서로소 유니온 타입
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 유니온타입

// const login = (user: User) => {
//   if ("kickCount" in user) {
//     console.log(`${user.name}는 관리자이며 ${user.kickCount}회 관리했습니다.`);
//   } else if ("point" in user) {
//     console.log(`${user.name}는 멤버이며 ${user.point}를 적립했습니다.`);
//   } else if ("visitCount" in user) {
//     console.log(`${user.name}는 손님이며 ${user.visitCount}번 방문했습니다.`);
//   }
// };

// 좀 더 직관적으로 코드 작성
const login = (user: User) => {
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name}는 관리자이며 ${user.kickCount}회 관리했습니다.`
      );
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}는 멤버이며 ${user.point}를 적립했습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}는 손님이며 ${user.visitCount}번 방문했습니다.`);
      break;
    }
  }
};
