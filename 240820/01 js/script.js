// let bag = new Map();

// bag.set("color", "red"); // key : value

// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["merterial", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini").set("type2", "mini");
myCup.set("perpose", ["mini", "daily"]);

console.log(myCup);

// 메서드 체이닝!
console.log(myCup.get("type"));
console.log(myCup.size);
console.log(myCup.has("color"));

console.log(myCup.delete("type"));

console.log(myCup);
console.log(myCup.keys());
console.log(myCup.values());
console.log(myCup.entries());
// console.log(myCup);

// console.log(myCup.clear());
// console.log(myCup);

for (let key of myCup.keys()) {
  console.log(key);
}
for (let key of myCup.values()) {
  console.log(key);
}
for (let key of myCup.entries()) {
  console.log(key);
}
