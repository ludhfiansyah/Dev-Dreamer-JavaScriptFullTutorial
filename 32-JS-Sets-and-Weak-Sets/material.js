/*SETS*/
const fruits = new Set();

// add value one by one in sets
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
console.log(fruits);

// add value into sets in one line
fruits.add("plum").add("pear").add("apricots");
console.log(fruits);

// below code will do nothing as sets will not accept duplicate value
fruits.add("apple");

// delete value in sets
fruits.delete("orange");
console.log(fruits);

// check value in sets
let check = fruits.has("apple");
console.log(fruits);
console.log(check);

// check the length of sets
console.log(fruits.size);

// remove values in sets
fruits.clear();
console.log(fruits);

// we can also taken out an array and turn into sets with this way
let arrayFruits = [
  "apple",
  "banana",
  "orange",
  "plum",
  "peach",
  "strawberry",
  "raspberry",
];
const fruits2 = new Set(arrayFruits);
console.log(fruits2);

/* WEAK SETS*/ // weak-sets can only contain non-primitive data type
let nums = [1, 2, 3, 4, 5];
let weakSet = new WeakSet();
weakSet.add(nums);
nums = null;
console.log(nums);
console.log(weakSet);
