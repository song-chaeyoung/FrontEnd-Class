// 피보나치 수열은 1,1로 시작
// 1, 1, 2, 3, 5, 8, 13, 21 ...

const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;

  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }
  return memo[n];
};

let start = new Date();
console.log(fibonacci(50));
let end = new Date();
console.log(end - start);

start = new Date();
console.log(fibonacci2(50, []));
end = new Date();
console.log(end - start);
