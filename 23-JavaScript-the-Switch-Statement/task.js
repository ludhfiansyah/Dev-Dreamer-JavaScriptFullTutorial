/*
1. Create a variable called favFood and set this equal to your fav food. Create a switch statement with four foods as cases, and another one that matches favFood, so we're looking for five cases in total. For each case log "That's right! [favFood] is my favourite!" Think about how to pull the favFood variable in. Finally add a default case that says "Fav food not found...I'm hungry".
*/

const favFood = "nasi noreng";

switch (favFood) {
  case "nasi bebek madura":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "nasi ayam penyet":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "nasi goreng":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "nasi ayam bakar":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  case "nasi uduk":
    console.log(`That's right! ${favFood} is my favourite!`);
    break;
  default:
    console.log("Fav food not found...I'm hungry");
    break;
}
