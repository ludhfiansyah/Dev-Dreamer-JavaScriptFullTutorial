/*
1. Create an array with the following fruits: apple, orange, banana. Use the correct array method to add the fruits cherry and pineapple to the beginning of the array. Then add the fruits plum and grapes to the end of the array, once again using the relevant array method.
*/
const fruits = ["apple", "orange", "banana"];
fruits.unshift("cherry", "pineapple");
console.log(fruits);
fruits.push("plump", "grapes");
console.log(fruits);

/*
2. Replace orange with lemon using the splice() method.
*/
fruits.splice(3, 1, "lemon");
console.log(fruits);
/*
3. Sort the values alphabetically.
*/
fruits.sort();
console.log(fruits);
