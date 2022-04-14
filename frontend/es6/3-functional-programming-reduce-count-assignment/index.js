/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */
// const numbers = [1, 1, 1, 5, 5, 10, 9].reduce((total,x) => (x==1 ? total+1 : total), 0)
// console.log(numbers)
const countRepetition = (numbers) => {
  // TODO: answer here
  repetition = numbers.reduce((prev, curr, i) => {
    prev[i] = curr;
    return prev;
  }, {});
  return repetition;
};
const numbers = [1, 1, 1, 5, 5, 10, 9]
console.log(countRepetition(numbers))
module.exports = countRepetition