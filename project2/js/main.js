import './push-data.js'
import './web-storage.js'
let strArray = [{ name:'honda' },{ name:'honda' },{ name:'honda' }, "q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item.name, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates
