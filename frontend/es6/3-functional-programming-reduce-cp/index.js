/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

const sumTotalArray = (numbers) => {
  // TODO: answer here
  return numbers.reduce((prev, curr) => prev + curr);
};
const numbers = [1, 1, 1, 5]
console.log(numbers)
console.log(sumTotalArray(numbers))
module.exports = sumTotalArray