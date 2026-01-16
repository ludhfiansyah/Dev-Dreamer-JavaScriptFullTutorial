/*
1. Instantiate or create a new date object assigning it to the
variable date, the type of date we're looking for is the current date.
*/
let date = new Date();

/*
2. Use the console to log out todays date.
*/
console.log(date);

/*
3. Create two new variables called hour and min, and assign the
relevant values to these. So get the hour and assign it to hour etc.
Console log the time, including colons in the console, e.g. 10:24
*/
let hour = date.getHours();
let minute = date.getMinutes();
console.log("The time is " + hour + ":" + minute);

/*
4. Console log the name of the current day, you can use the long or
shorthand.
*/
console.log(date.toLocaleString("default", { weekday: "long" }));
