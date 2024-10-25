interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "Peter",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

const gotoSchool = (user: User<Student>) => {
  console.log(`${user.profile.school}에 등교 완료`);
};

gotoSchool(studentUser);

// const gotoSchool = (user: User) => {
//   if (user.profile.type !== "student") {
//     console.log("잘못 오셨습니다.");
//     return;
//   }
//   if (user.profile.type === "student") {
//     console.log(`${user.profile.type}로 등교 완료`);
//   }
// };
