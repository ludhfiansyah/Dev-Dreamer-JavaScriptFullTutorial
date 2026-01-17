/*
1. Re-write the following if else statement as a Ternary Operator:

   let message = '';

   if (1 > 10) {
   message = 'Condition is TRUE'
   } else {
   message = 'Condition is FALSE'
   }

*/
let message = 1 > 10 ? "Condition is TRUE" : "Condition is FALSE";
console.log(message);
/*
2. Assign the value '12:00' to a variable called time, and create a
   Ternary Operator to console log 'Good Morning' or 'Good Evening' depending
   on the time.
*/

let time = "11:00";

let greeting = time < "12:00" ? "Good Morning" : "Good Evening";
console.log(greeting);
