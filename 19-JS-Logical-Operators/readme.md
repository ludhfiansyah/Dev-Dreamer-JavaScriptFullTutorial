## JAVASCRIPT 'FALSY' VALUES

- false
- undefined
- null
- "" (empty string)
- NaN
- 0

anything other that the above value is considered to be Truethy value

## JS LOGICAL OPERATORS

! - NOT (or negation)
&& - AND
|| - OR
?? - Nullish Coalescing

### ! - NOT (or negation)

let a = 1; // true
a = !a;

console.log(typeof a, a);

let b = 0; // false
b = !b; // b = not false. TRUE

console.log(typeof b, b);

let x = 1; // true
let y = 0; // false

if (x) {
console.log("hello1");
}
if (!x) {
console.log("hello2");
}
if (y) {
console.log("hello3");
}
if (!y) {
console.log("hello4");
}

## && - AND

let x = 1; // true
let y = 0; // false

if (x && y) {
console.log("hello");
}

if (x && !y) {
console.log("hello");
}

## || - OR

## ?? - Nullish Coalescing

### TASKS

1. Will the result of the following be true or false?

   let a = "Dev Dreamer";
   let b = '';

   if (a || b) {
   console.log("hello");
   }

2. Will the result of the following be true or false?

   let a = "Dev Dreamer";
   let b = '';

   if (a && true && !b) {
   console.log("hello");
   }

3. Create the following variables a = -1; b = 1; create an if
   statement using a logical && operator. Will the expression evaluate
   to true?
