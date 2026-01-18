let supers = [
  "Superman",
  "Batman",
  "Flash",
  "Aquaman",
  "Thor",
  "Spider-Man",
  "Green Lantern",
  "Wolverine",
  "Cyclops",
  "Profesor X",
];

// .forEach method is to perform sort of an action to each value thats why we need to put a function inside the pareanthases
supers.forEach(function (value, index, array) {
  // console.log(`${value}`);
  // console.log(value);
  // console.log(`${index}`);
  // console.log(index);
  // console.log(`${array}`);
  // console.log(array);
  console.log(`The index value of ${value} is ${index}`);
});

// .map it is pretty much the same like .forEach method however map can return a copy of an original array (so .map will create a new array)
function upperCase(value) {
  return value.toUpperCase();
}
let supersCap = supers.map(upperCase);
console.log(supersCap);
console.log(supers);

// .map example in number array
let numbers1 = [1, 2, 3];
function double(x) {
  return x * 2;
}
let doubleNumbers = numbers1.map(double);
console.log(numbers1);
console.log(doubleNumbers);

//.filter method is to filter a value in an existing array and return the value that is match the condition.
let numbers2 = [1, 2, 3, 50, 45, 77, 12, 34, 76, 90, 13, 100];
let evenNumbers1 = numbers2.filter(function (value, index, array) {
  if (value % 2 === 0) {
    return value;
  }
});
console.log(numbers2);
console.log(evenNumbers1);

// .reduce method will run a function on each value inside an array reduce the array down to a single value. reduce method can be used to string and oter data type as well, but it mostly used in number. reduce method can take up to 4 parameters where mostly only the first two are frequently used.
let numbers3 = [1, 2, 3, 50, 45, 77, 12, 34, 76, 90, 13, 100];

function add(total, value, index, array) {
  return total + value;
}

let sum = numbers3.reduce(add);
console.log(sum);

// .some method will iterate over an array to checks if the given condition is true for at least one of the values, if it is it will return true if all values are not meet the condition, it will return false
let numbers4 = [1, 2, 3, 112];
let higherThanTen = numbers4.some(function (value) {
  return value > 10;
});

console.log(higherThanTen);

// .every method is same like .some method, but for .every the value has to be all pass the codition to return true, if any one of the value does not pass the condition it will return false.
let numbers5 = [14, 20, 30, 112];
let AllhigherThanTen = numbers5.every(function (value) {
  return value > 10;
});

console.log(AllhigherThanTen);

// .find method will iterate over an array to find a certain value. if an array contain the value it will return the value, if not it will return undefined.
const supers2 = [
  "Superman",
  "Batman",
  "Flash",
  "Aquaman",
  "Thor",
  "Spider-Man",
  "Wolverine",
  "Cyclops",
  "Profesor X",
];
const findSuper1 = supers2.find(function (value) {
  return value === "Thor";
});
console.log(findSuper1);

// .findIndex method will find the index number of a value in the array
const findSuper2 = supers2.findIndex(function (value) {
  return value === "Thor";
});
console.log(findSuper2);
