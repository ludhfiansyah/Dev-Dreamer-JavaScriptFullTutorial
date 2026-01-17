/*
1. Use the correct Math function to generate three random numbers,
   between 1- 10. Store each of these in variables named: num1, num2,
   num3. Console log the variables.
*/
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let num3 = Math.floor(Math.random() * 10) + 1;
console.log(num1 + " and " + num2 + " and " + num3);

/*
2. Find the largest of the three numbers by using the relevant Math
   method, store the value in a variable called max and console log max
   to show the largest number.
*/
let max = Math.max(num1, num2, num3);
console.log(max);
