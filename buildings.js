import { lollies, lollyCount } from './game.js'
import { increment } from './upgrade.js'

export const passiveLollyCount = document.getElementById("lolliesPSec")
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
    gSnakePrice *= increment;
    passive += gSnakeRate;
    gSnakeCost.textContent = gSnakePrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
  }
})

setInterval(() => {
  lollies += passiveLollies;
  lollyCount.textContent = lollies.toFixed(1);
}, 1000);
