/*
1. Create a list of colours: 'Red', 'Orange', 'Yellow', 'Green', 'Blue' and
   iterate over them by using the for..of loop. Log the result to the console.
*/
const colours = ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
for (let colour of colours) {
    console.log(colour)
}

console.log('')
/*
2. Use a break to only show Red, Orange, and Yellow. So break out of the
   loop once we get to Green.
*/
const colours2 = ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
for (let colour of colours2) {
    if (colour === 'Green') {
        break;
    }
    console.log(colour)
}