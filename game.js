let lollies = 0;
const lollyButton = document.getElementById("lButton")
const lollyCount = document.getElementById("lollies")

let clickPower = 1;
let increment = 1.3;

const passiveLollyCount = document.getElementById("lolliesPSec")
let passiveLollies = 0;

const gSnakeButton = document.getElementById("gSnake")
const gSnakeCost = document.getElementById("gSnake-price")
let gSnakeCount = document.getElementById("gSnake-count")
let gSnakesOwned = 0;
let gSnakeRate = 0.2;
let gSnakePrice = 10;

const hmLollyButton = document.getElementById("hmLolly")
const hmLollyCost = document.getElementById("hmLolly-price")
let hmLolllyCount = document.getElementById("hmLolly-count")
let hmLolliesOwned = 0;
let hmLollyRate = 3;
let hmLollyPrice = 100;

lollyButton.addEventListener("click", () => {
  lollies += clickPower;
  lollyCount.textContent = lollies;
});

gSnakeButton.addEventListener("click", () => {
  console.log("Event listener worked")
  if (lollies >= gSnakePrice) {
    console.log("Sufficient lollies")
    gSnakesOwned++
    lollies -= gSnakePrice;
    gSnakePrice *= increment;
    passiveLollies += gSnakeRate;
    gSnakeCost.textContent = gSnakePrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    gSnakeCount.textContent = gSnakesOwned;
  }
})

hmLollyButton.addEventListener("click", () => {
  console.log("Event listener worked")
  if (lollies >= hmLollyPrice) {
    console.log("Sufficient lollies")
    hmLolliesOwned++
    lollies -= hmLollyPrice;
    hmLollyPrice *= increment;
    passiveLollies += hmLollyRate;
    hmLollyCost.textContent = hmLollyPrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    hmLolllyCount.textContent = hmLolliesOwned;
  }
})

setInterval(() => {
  console.log("Lollies Per Second is working")
  lollies += passiveLollies;
  lollyCount.textContent = lollies.toFixed(1);
}, 1000);
