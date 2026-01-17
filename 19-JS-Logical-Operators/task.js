/*
1. Will the result of the following be true or false?

   let a = "Dev Dreamer";
   let b = '';

   if (a || b) {
   console.log("hello");
   }
*/
let a = "Dev Dreamer";
let b = "";

if (a || b) {
  console.log("hello");
}

/*
2. Will the result of the following be true or false?

   let c = "Dev Dreamer";
   let d = '';

   if (a && true && !b) {
   console.log("hello");
   }
*/
let c = "Dev Dreamer";
let d = "";

if (a && true && !b) {
  console.log("hello");
}

/*
3. Create the following variables e = -1; f = 1; create an if
   statement using a logical && operator. Will the expression evaluate
   to true?
*/
const e = -1;
const f = 1;
if (e && f) {
  console.log("hellow");
}
