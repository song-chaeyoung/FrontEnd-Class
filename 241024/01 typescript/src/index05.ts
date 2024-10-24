class Student {
  // Field => 인스턴스 객체의 키 역할
  // public name;
  // private age;
  // protected grade;

  // 생성자함수 => Field에 매칭될 값을 찾아오는 역할
  constructor(
    public name: string,
    private age: number,
    protected grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

const studentB = new Student("cy", 20, 3);

// console.log(studentB);
// console.log(studentB.introduce());

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name: string, age: number, grade: number, favoriteSkill: string) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  func() {
    // this.age; // 불가
    this.name; // 가능
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 합니다.`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 30, 1, "TS");

console.log(studentC.programming());

// 접근제어자 3개
