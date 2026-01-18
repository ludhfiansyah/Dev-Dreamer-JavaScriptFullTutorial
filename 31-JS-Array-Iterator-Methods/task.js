const fruits = ["apple", "orange", "banana"];
/*
1. Loop through the array using the forEach() method to alert each item
   including the index number, e.g. '0 - apple' '1 - orange' etc.
*/
fruits.forEach(function (value, index, array) {
  console.log(`${index} - ${value}`);
});

/*
2. Create a new array using the relevant iterator method that takes the
   fruits and sets them to uppercase.
 */
function upperCase(value) {
  return value.toUpperCase();
}
let uperCaseFruit = fruits.map(upperCase);
console.log(uperCaseFruit);

/*
3. Use the right iterator method to check to see if each fruit contains more
   than three letters, console log the boolean result.
 */
const fruitsMoreThanThreeLetters = fruits.every(function (value, index, array) {
  return value.length > 3;
});
console.log(fruitsMoreThanThreeLetters);
