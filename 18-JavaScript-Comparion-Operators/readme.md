### JS COMPARISON OPERATORS

1. Relational
   Compare values in relation to one another
   let x = 7;

   // > more than
   console.log(
   x > 10, x > 6
   );

   // >= more than or equal to
   console.log(
   x >= 10, x >= 7
   );

   // < less than
   console.log(
   x < 10, x < 6
   );

   // <= less than or equal to
   console.log(
   x <= 10, x <= 7
   );

2. Abstract (or loose)
   Check to see if the values are the same
   let x = 7;
   // == equal to
   console.log(
   x == 7, x == 6
   );

   // != not equal to
   console.log(
   x != 7
   );

3. Strict
   Check to see if the values are the same
   AND the same type
   let x = 7;
   let y = "7";

   // === strict equality
   console.log(
   x === 7, x === y
   );

   // !== strict not equal to
   console.log(
   x !== y
   );

   console.log(
   'A' < 'Z'
   );

   let a = 'Time';
   let b = 'Timing';
   console.log(
   a > b, 'e' > 'i'
   );

### TASKS

1. Create two variables, called a and b. Assign the value 10 to a
   and 15 to b. Check to see if a is more than b, log the answer to the
   console.

2. Use the relevant comparison operator to identify whether a is
   equal to "10". Log your answer to the console.

3. Check once again to see if a is equal to "10", this time making
   sure to check against the type as well. Log your answer to the
   console.

4. If x is equal to "5" and y is equal to 6, what would the result
   of the following be?
   x !== y?
