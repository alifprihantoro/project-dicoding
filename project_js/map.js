/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// TODO

const currency = new Map();
currency.set('USD', 14000)
currency.set('JPY', 131)
currency.set('SGD', 11000)
currency.set('MYR', 3500)
const priceInIDR = priceInJPY * currency.get('JPY')
console.log(priceInIDR)
/**
 * Jangan hapus kode di bawah ini
 */
module.exports = { currency, priceInJPY, priceInIDR };
