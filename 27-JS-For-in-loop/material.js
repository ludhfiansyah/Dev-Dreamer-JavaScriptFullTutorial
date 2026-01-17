// First example
let character = {
  name: "Sonic",
  color: "Blue",
  speed: 1000,
};

for (let x in character) {
  console.log(x);
  console.log(`${x}: ${character[x]}`);
}

// Second Example
const salaries = {
  Peter: 24000,
  James: 34000,
  John: 55000,
};

for (let i in salaries) {
  let salary = `£${salaries[i]}`;
  console.log(`${i} earns ${salary} per year`);
}

// Third Example
let characters = {
  name: "Sonic",
  color: "Blue",
  speed: 1000,
};

characters.name = "Knuckles";
delete characters.speed;
characters.alignment = "Good";

Object.defineProperty(characters, "name", {
  value: "Tails", // what is the value of the property?
  enumerable: false, // will property show up in for in loop?
  configurable: false, // can property be deleted?
  writable: false, // can property be changed?
});

console.log(characters);

for (x in characters) {
  console.log(`${x}: ${characters[x]}`);
}
