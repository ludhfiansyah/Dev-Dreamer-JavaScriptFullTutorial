/* ! - NOT (or negation) */
let a = 1; // true
a = !a;

console.log(typeof a, a);

let b = 0; // false
b = !b; // b = not false. TRUE

console.log(typeof b, b);

let x = 1; // true
let y = 0; // false
let h = 1; // true
let i = 0; // false

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

/* && - AND */
if (x && y) {
  console.log("hello-1");
}

if (x && !y) {
  console.log("hello-2");
}

/* || - OR */
if (x || y) {
  console.log("hello-1");
}

x || console.log("This is ignored since x is true");
y || console.log("This is displyed since y is false");

h && console.log("This is displayed since h is true");
i && console.log("This is ignored since i is false");

/* ?? - Nullish Coalescing */
