example1();
/**
 * this function does nothing useful
 * @returns {void}
 */
function example1() {
  console.log("example text");
}

/**
 * logs the number variable on the global scope
 * @returns {void}
 */
function example2() {
  console.log(n);
}

/**
 * declares a local number variable and logs it
 * @returns {void}
 */
function example3() {
  let num = 2;
  console.log(num);
}

/**
 * returns the sum of a local variable and the given parameter
 * @param {number} p
 * @returns {number}
 */
function example4(p) {
  let num = 2;
  let sum = num + p;
  return sum;
}

/**
 * @type {number}
 */
let n = 4;

example2();
example3();

const func = example4(4);
console.log(func);
