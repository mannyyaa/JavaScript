//js me arrays ka size is not constant.

const myarr=new Array(1,2,3,4)
console.log(myarr[1])

//array methods

myarr.push(5)
//myarr.pop()
console.log(myarr)

arr1.unshift(0); //[ 0, 1, 2, 3, 4, 5 ] (adds element at front)
arr1.shift(); //[ 1, 2, 3, 4, 5 ] (removes element from front)

console.log(arr1.includes(4)); //true
console.log(arr1.indexOf(9)); //-1

let s=["today", "is","good","day"];
console.log(s.join());  //today,is,good,day
console.log(s.join(" ")); //today is good day
//join se typeof string hojata hai

//Interveiw ques: diff btw slice and splice method of array--------
/*
SLICE: extracts a section of array and returns new array. doesn't modify original array , 
Syntax: arr.slice(start, end) 
SPLICE: modifies original array by adding, removing or replacing elments. 
returnsan array containing the elements that were removed ,
Syntax: array.splice(start, deleteCount, item1, item2, ...) where item1, item2, ... (optional) are added after start */

let slicedarr= arr1.slice(1,3); //end index is not included
console.log("sliced array : ", slicedarr); //[ 2, 3 ]
console.log("original array : ", arr1); //[ 1, 2, 3, 4, 5 ]

let splicedarr=arr2.splice(2,3,-3,-2,-1);
console.log("spliced array : ", splicedarr); //[ 2, 3, 4 ]
console.log("original array : ", arr2); //[ 1, -3, -2, -1, 5 ]

//------------------ lect 15 -------------------

// Using `push()` 

// When an array is pushed, it's added as a single, nested element.
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); 
// Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// 2.2. Using `concat()` 
// Merges two or more arrays. It returns a new array and does not modify existing arrays [07:02].
const all_heroes_concat = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes_concat);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// 2.3. Using the Spread Operator (`...`) 
// method for merging arrays.
// It "spreads" out the elements of arrays into a new array.
const all_heroes_spread = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes_spread);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// --- 3. Flattening Nested Arrays ---

// Example of a deeply nested array 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Using `flat()` to flatten the array 
// `flat(depth)` takes an argument for the depth to flatten.
// `Infinity` can be used to flatten all nested arrays regardless of depth 
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// --- 4. Utility Array Methods ---

// 4.1. `Array.isArray()` 
// Checks if a given value is an array. Returns `true` or `false`.
// console.log(Array.isArray("Hitesh")); // Output: false

// 4.2. `Array.from()` [12:29]
// Creates a new, shallow-copied `Array` instance from an iterable or array-like object.
// console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]

// Interesting case with objects [13:01]
// `Array.from()` might return an empty array if it cannot directly convert the object.
const obj = { name: "Hitesh" };
// console.log(Array.from(obj)); // Output: []
// To convert object keys or values specifically:
// console.log(Array.from(Object.keys(obj))); // Output: ["name"]
// console.log(Array.from(Object.values(obj))); // Output: ["Hitesh"]

// 4.3. `Array.of()` 
// Creates a new `Array` instance from a variable number of arguments.
// It can convert multiple variables/elements into a single array.
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300

