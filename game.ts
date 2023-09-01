let lollies: number = 0;
const lollyButton: HTMLElement | null = document.getElementById("lButton")
const lollyCount: HTMLElement | null = document.getElementById("lollies")

let clickPower: number = 1;
let increment: number = 1.3;

const passiveLollyCount: HTMLElement | null = document.getElementById("lolliesPSec")
let passiveLollies: number = 0;

const gSnakeButton: HTMLElement | null = document.getElementById("gSnake")
const gSnakeCost: HTMLElement | null = document.getElementById("gSnake-price")
let gSnakeCount: HTMLElement | null = document.getElementById("gSnake-count")
let gSnakesOwned: number = 0;
let gSnakeRate: number = 0.2;
let gSnakePrice: number = 10;

const hmLollyButton: HTMLElement | null = document.getElementById("hmLolly")
const hmLollyCost: HTMLElement | null = document.getElementById("hmLolly-price")
let hmLollyCount: HTMLElement | null = document.getElementById("hmLolly-count")
let hmLolliesOwned: number = 0;
let hmLollyRate: number = 3;
let hmLollyPrice: number = 100;

lollyButton?.addEventListener("click", () => {
  if (lollyCount == null) {
    console.log("Lolly Count is null")
  } else {
    lollies += clickPower;
    lollyCount.textContent = String(lollies);
  }
});

function buygSnake() {
  if (gSnakeCost == null || lollyCount == null || passiveLollyCount == null || gSnakeCount == null) {
    return
  }
  if (lollies >= gSnakePrice) {
    console.log("Sufficient lollies")
    gSnakesOwned++
    lollies -= gSnakePrice;
    gSnakePrice *= increment;
    passiveLollies += gSnakeRate;
    gSnakeCost.textContent = gSnakePrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    gSnakeCount.textContent = String(gSnakesOwned);
  }
}

gSnakeButton?.addEventListener("click", buygSnake)

function buyHmLolly() {
  if (hmLollyCost == null || lollyCount == null || passiveLollyCount == null || hmLollyCount == null) {
    return
  }
  if (lollies >= hmLollyPrice) {
    console.log("Sufficient lollies")
    hmLolliesOwned++
    lollies -= hmLollyPrice;
    hmLollyPrice *= increment;
    passiveLollies += hmLollyRate;
    hmLollyCost.textContent = hmLollyPrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    hmLollyCount.textContent = String(hmLolliesOwned);
  }
}

hmLollyButton?.addEventListener("click", buyHmLolly)

setInterval(() => {
  if (lollyCount == null) {
    console.log("Lolly Count is null")
  } else {
    lollies += passiveLollies;
    lollyCount.textContent = lollies.toFixed(1);
  }
}, 1000);
