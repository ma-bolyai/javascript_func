/**
 * @type {string}
 */
const a = "hi";
const b = ["a", "b", "c"];

for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}
console.log(a);

for (const item of b) {
  console.log(item);
}

for (const key in b) {
  console.log(`the key is: ${key}, the value is ${b[key]}`);
}

/**
 * @type {{name: string, age:number}}
 */
const obj = {
  name: "ma-bolyai",
  age: 18,
};
console.log(`name: ${obj.name}, age: ${obj.age}`);
