/*
1. What will the following code display in the console?

   let num = 10 + 2;

   if (num > 2 && num < 20 ) {
   console.log("TRUE");
   } else {
   console.log("FALSE");
   }
*/
let num = 10 + 2;

if (num > 2 && num < 20) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
/*
2. Create a variable called user and set its value to 'employee'. Create
   an else if statement to first check if user is equal to guest, if this is
   true console log 'Login Denied', then check if user is equal to employee
   and console log 'Succesfully Logged in
*/
const user = "employee";

if (user === "guest") {
  console.log("Login Denied");
} else if (user === "employee") {
  console.log("Successfully Logged in");
}

/*
3. Assign your first name to a variable called myName and create an if
   statement to see if the number of letters in your name is more than 5, if
   it is alert "More than 5", next check to see if it is exactly 5 letters,
   if it is alert "Exactly 5 letters", if neither of these is true then alert
   "Less than 5 letters".
*/
const myName = "Ludhfi";

if (myName.length > 5) {
  console.log("More than 5");
} else if (myName.length === 5) {
  console.log("Exactly 5 letters");
} else {
  console.log("Less than 5 letters");
}
