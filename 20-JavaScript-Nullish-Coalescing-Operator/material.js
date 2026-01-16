let game; // undefined
let game2 = null; // null
let game3 = "Sonic"; // string

console.log(game2 ?? game3);

let user;
console.log(user || "Guest");

let score = 0; // falsy
console.log(score || "no score registered");
console.log(score ?? "no score registered");
