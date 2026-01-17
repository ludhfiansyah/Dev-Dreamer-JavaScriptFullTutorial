/* 1. Create a variable called PI and set it's value to 3.14159. Use
the correct Number method to display only three digits after the
decimal point, log this to the console. */
const PI = 3.14159;
console.log(PI.toFixed(3));

/* 2. Using the previous PI variable, create a new variable called
num2 and use the correct Number method to display a total of
three digits only. */
let num2 = PI;
console.log(num2.toPrecision(3));

/* 3. Create a variable called lightSpeed and set it's value to
186000. Use the .toExponential() method to log this new display
in the console. */
let lightSpeed = 186000;
console.log(lightSpeed.toExponential());
