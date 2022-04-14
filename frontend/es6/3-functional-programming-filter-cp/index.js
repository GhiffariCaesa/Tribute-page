/**
 * Mencari hewan diantara semak-semak
 * Buatlah fungsi untuk mencari nama binatang yang tersembunyi di dalam random string
 * Kata yang di cari akan selalu dituliskan dengan huruf kecil
 * Sedangkan semak-semak akan dituliskan dengan huruf besar.
 *
 * Contoh:
 * Input: UkUNFYGaFYFYmtNUHbJKHJJiOKDJKDnKFKFLgLLF
 * Output: kambing
 *
 * Hint:
 * - Javascript memiliki fungsi untuk mengubah huruf besar menjadi huruf kecil dan huruf besar menjadi huruf kecil
 * - string.toLowerCase(); string.toUpperCase();
 *
 */
// const string = "UkUNFYGaFYFYmtNUHbJKHJJiOKDJKDnKFKFLgLLF";
// const bush = string.split('');
// console.log(bush.toLowerCase());
const findAnimal = (bush) => { 
  return bush.split("").filter( item => item.toLowerCase() === item).join("")
};
console.log(findAnimal("UkUNFYGaFYFYmTNUHbJKHJJiOKDJKDnKFKFLgLLF"))
module.exports = findAnimal