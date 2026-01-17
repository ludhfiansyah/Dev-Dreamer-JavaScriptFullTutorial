// First example
let characters = ["Sonic", "Tails", "Mario", "Luigi", "Link"];
for (x of characters) {
  console.log(x);
}

// Second example
let course = "JavaScript";
for (letter of course) {
  console.log(letter);
}

// Third example
let characters2 = ["Sonic", "Tails", "Mario", "Luigi", "Link"];
for (x of characters2) {
  if (x === "Luigi") {
    break;
  } else {
    console.log(x);
  }
}
