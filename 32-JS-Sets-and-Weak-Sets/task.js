/*
1. Create a Set and add the following values, 'Scorpion', 'Sub-Zero',
   'Reptile' and 'Liu Kang
*/
const animals = new Set();
console.log(animals);
animals.add("Scorpion").add("Sub-zero").add("Reptile").add("Liu Kang");
console.log(animals);

/*
2. Iterate through the Set and print the values to the console.
*/
for (let char of animals) {
  console.log(char);
}
// or this
animals.forEach(function (value) {
  console.log(value);
});
