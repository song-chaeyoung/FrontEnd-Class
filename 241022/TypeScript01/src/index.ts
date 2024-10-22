// TS 타입

// 점진적 타입시스템 => 타입추론 => 타입주석을 입력하지 않아도 타입정의
let num: number = 1;
num = 10;

// 아래와 같이 타입주석!!
let str: String = "hello";
str = "world";

let bool: boolean = false;
bool = true;

let obj: object = { name: "cy" };

// 다양한 종류의 타입 가운데, 치트키의 역할!
let num1: any = 2;
num1 = true;
num1 = "5415613";

// undefinded
let sample01: undefined = undefined;

let sample02: unknown = 10;
sample02 = "1";

// 배열타입
const numArr: number[] = [1, 2, 3];
const strArr: String[] = ["1", "2", "3"];
const boolArr: Array<boolean> = [true, false, true];

// union타입
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple타입
let tup1: [number, number] = [1, 2];

const users: [String, Number][] = [
  ["Divid", 1],
  ["Song", 2],
  ["ASK", 3],
];
