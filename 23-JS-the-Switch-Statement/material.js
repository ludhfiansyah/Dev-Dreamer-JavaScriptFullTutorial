let roll = 4;

switch (roll) {
  case 1:
    console.log("You rolled a 1");
    break;
  case 2:
    console.log("You rolled a 2");
    break;
  case 3:
    console.log("You rolled a 3");
    break;
  case 4:
    console.log("You rolled a 4");
    break;
  case 5:
    console.log("You rolled a 5");
    break;
  case 6:
    console.log("You rolled a 6");
    break;
}

// SWITCH STATEMENT CHECKS STRICT EQUALITY
let roll1 = 4;

switch (roll1) {
  case 1:
    console.log("You rolled a 1");
    break;
  case 2:
    console.log("You rolled a 2");
    break;
  case 3:
    console.log("You rolled a 3");
    break;
  case "4":
    console.log("You rolled a 4");
    break;
  case 5:
    console.log("You rolled a 5");
    break;
  case 6:
    console.log("You rolled a 6");
    break;
  default:
    console.log(`The number ${roll1} is not possible`);
}

// OTHER WAY TO USE STRICT STATEMENT
let today = new Date().toLocaleString("default", { weekday: "short" });

switch (true) {
  case today === "Mon":
    console.log(`Today is ${today}`);
    break;
  case today === "Tue":
    console.log(`Today is ${today}`);
    break;
  case today === "Wed":
    console.log(`Today is ${today}`);
    break;
  case today === "Thu":
    console.log(`Today is ${today}`);
    break;
  case today === "Fri":
    console.log(`Today is ${today}`);
    break;
  case today === "Sat":
    console.log(`Today is ${today}`);
    break;
  case today === "Sun":
    console.log(`Today is ${today}`);
    break;
  default:
    console.log(`No idea!!`);
}
