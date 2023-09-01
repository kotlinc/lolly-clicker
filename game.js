import { clickPower } from './upgrades.js'

let lollies = 0;
const lollyButton = document.getElementById("lButton")
const lollyCount = document.getElementById("lollies")

lollyButton.addEventListener("click", () => {
  lollies += clickPower;
  lollyCount.textContent = lollies;
});

export { lollies }
