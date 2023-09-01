ortimport { clickPower } from './upgrades.js'

let lollies = 0;
const lollyButton = document.getElementById("lButton")
export const lollyCount = document.getElementById("lollies")

lollyButton.addEventListener("click", () => {
  lollies += clickPower;
  lollyCount.textContent = lollies;
});

export { lollies }
