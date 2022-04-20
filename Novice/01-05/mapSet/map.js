let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

console.log(map.get(1)); /*mendapatkan nilai dari key 1 */
console.log(map.get("1")); /*mendapatkan nilai dari key "1" */
console.log(map.size); /*menghitung jumlah objek dari variabel map*/
