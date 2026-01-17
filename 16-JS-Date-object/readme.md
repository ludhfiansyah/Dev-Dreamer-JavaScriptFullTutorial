### Date

At the first time I learn this topic, I couldn't grasp the concept easely so it is a must for me to repeat and relearn for this spesific topic few more times.

let currentDate = new Date();
//console.log(currentDate);

let milliseconds = new Date(988746938423);
//console.log(milliseconds);

let dateString = new Date("Aug 29 2019 08:34:00");
//console.log(dateString);

let componentDate = new Date(1998, 3);
//console.log(componentDate);

console.log(
currentDate.toLocaleString('default', { weekday: 'short' })
);

## TASK

1. Instantiate or create a new date object assigning it to the
   variable date, the type of date we're looking for is the current date.

2. Use the console to log out todays date.

3. Create two new variables called hour and min, and assign the
   relevant values to these. So get the hour and assign it to hour etc.
   Console log the time, including colons in the console, e.g. 10:24

4. Console log the name of the current day, you can use the long or
   shorthand.
