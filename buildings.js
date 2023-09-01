import { lollies } from './game.js'
import { increment } from './upgrade.js'

let passiveLollies = 0;

const gSnakeButton = document.getElementById("gSnake")
const gSnakeCost = document.getElementById("gSnake-price")
let gSnakeCount = document.getElementById("gSnake-count")
let gSnakesOwned = 0;
let gSnakeRate = 0.2;
let gSnakePrice = 10;

gSnakeButton.addEventListener("click", () => {
  if (lollies >= gSnakePrice) {
    lollies -= gSnakePrice;
    
  }
})

setInterval(() => {
  lollies += passiveLollies;
}, 1000);
