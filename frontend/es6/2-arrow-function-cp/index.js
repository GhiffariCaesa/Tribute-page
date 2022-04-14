/**
 * Ubah fungsi-fungsi di bawah ini menjadi bentuk arrow function
 *
 * function multiplyByTwo (n) {
 *  return n * 2;
 * }
 *
 * function multiply (x, y) {
 *  return x * y;
 *
 * function returnTheTwo() {
 *  return 2;
 * }
 *
 */

// TODO: answer here
const multiplyByTwo = (n) => {return n * 2}
console.log(multiplyByTwo(3))

const multiply = (x, y) => {return x * y;}
console.log(multiply(5, 2))

const returnTheTwo = () => {return 2;}
console.log(returnTheTwo())

module.exports = {
  multiplyByTwo,
  multiply,
  returnTheTwo
}