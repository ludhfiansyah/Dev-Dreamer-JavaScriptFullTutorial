// .length method in arrays
let supers1 = ["Superman", "Batman", "Flash", "Aquaman"];
console.log(supers1.length);
console.log(supers1[supers1.length - 1]);

supers1.length = 2;
console.log(supers1);

supers1.length = 3;
console.log(supers1);

// indexOf
let supers2 = ["Superman", "Batman", "Flash", "Aquaman", "Hulk"];
console.log(supers2);
console.log(supers2.indexOf("Flash"));
console.log(supers2.indexOf("Spiderman"));

// includes
console.log(supers2.includes("Batmans"));
console.log(supers2.includes("batman"));

// .pop remove the arrays from the last items
console.log(supers2.pop());
console.log(supers2);

// .shift remove the arrays from the first items
console.log(supers2.shift());
console.log(supers2);

// .push to add items to the last index
supers2.push("Spider-Man");
console.log(supers2);

// .unshift to add items to the first index
supers2.unshift("Thor");
console.log(supers2);

// .concate method to merge an array with another array
const newSupers1 = supers2.concat(["Wolverine", "Cyclops", "Profesor X"]);
console.log(supers2);
console.log(newSupers1);

// .join method is used to turn an array into a string and by default it separated by comma
console.log(supers2.join());
console.log(supers2.join(", "));
console.log(supers2.join(" | "));

// .split method is used to turn a strig into an array
const supers3 = "Superman, Batman, Flash";
const newSupers2 = supers3.split(", ");
console.log(newSupers2);

// .slice is a method to cut/slice an array or create a sub array from one array to other array
const supers4 = [
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
let xmen = supers4.slice(6, 9);
console.log(xmen);
console.log(supers4);

// .splice is to remove items in an array and replace it with a new one
supers4.splice(5, 1, "Green Lantern");
console.log(supers4);
supers4.splice(5, 0, "Spider-Man");
console.log(supers4);
supers4.splice(3, 1);
console.log(supers4);

// .reverse method is to reverse the order of items within an array
supers4.reverse();
console.log(supers4);

// .sort method is to sort the items within an array in alphabetical order
supers4.sort();
console.log(supers4);
