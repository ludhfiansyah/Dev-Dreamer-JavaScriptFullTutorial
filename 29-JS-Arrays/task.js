/*
1. Create an array of any three countries. Add an extra country in index
   number 3, console log the list.
*/
const countries = ['Indonesia', 'Palestine', 'Pakistan']
countries[3] = 'Sudan'
console.log(countries);

/*
2. Create a multi-dimensional array of colours, three colours in the top
   level of the array, and three colours in the second level. Access the last
   colour in the second level, and console log the result
*/
const colours = [
    ['Pink', 'Red', 'Orange'],
    ['Yellow', 'Green', 'Blue']
]
console.log(colours[1][2])