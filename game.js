var lollies = 0;
var lollyButton = document.getElementById("lButton");
var lollyCount = document.getElementById("lollies");
var clickPower = 1;
var increment = 1.3;
var passiveLollyCount = document.getElementById("lolliesPSec");
var passiveLollies = 0;
var gSnakeButton = document.getElementById("gSnake");
var gSnakeCost = document.getElementById("gSnake-price");
var gSnakeCount = document.getElementById("gSnake-count");
var gSnakesOwned = 0;
var gSnakeRate = 0.2;
var gSnakePrice = 10;
var hmLollyButton = document.getElementById("hmLolly");
var hmLollyCost = document.getElementById("hmLolly-price");
var hmLollyCount = document.getElementById("hmLolly-count");
var hmLolliesOwned = 0;
var hmLollyRate = 3;
var hmLollyPrice = 100;
lollyButton === null || lollyButton === void 0 ? void 0 : lollyButton.addEventListener("click", function () {
    if (lollyCount == null) {
        console.log("Lolly Count is null");
    }
    else {
        lollies += clickPower;
        lollyCount.textContent = String(lollies);
    }
});
function buygSnake() {
    if (gSnakeCost == null || lollyCount == null || passiveLollyCount == null || gSnakeCount == null) {
        return;
    }
    if (lollies >= gSnakePrice) {
        console.log("Sufficient lollies");
        gSnakesOwned++;
        lollies -= gSnakePrice;
        gSnakePrice *= increment;
        passiveLollies += gSnakeRate;
        gSnakeCost.textContent = gSnakePrice.toFixed(1);
        lollyCount.textContent = lollies.toFixed(1);
        passiveLollyCount.textContent = passiveLollies.toFixed(1);
        gSnakeCount.textContent = String(gSnakesOwned);
    }
}
gSnakeButton === null || gSnakeButton === void 0 ? void 0 : gSnakeButton.addEventListener("click", buygSnake);
function buyHmLolly() {
    if (hmLollyCost == null || lollyCount == null || passiveLollyCount == null || hmLollyCount == null) {
        return;
    }
    if (lollies >= hmLollyPrice) {
        console.log("Sufficient lollies");
        hmLolliesOwned++;
        lollies -= hmLollyPrice;
        hmLollyPrice *= increment;
        passiveLollies += hmLollyRate;
        hmLollyCost.textContent = hmLollyPrice.toFixed(1);
        lollyCount.textContent = lollies.toFixed(1);
        passiveLollyCount.textContent = passiveLollies.toFixed(1);
        hmLollyCount.textContent = String(hmLolliesOwned);
    }
}
hmLollyButton === null || hmLollyButton === void 0 ? void 0 : hmLollyButton.addEventListener("click", buyHmLolly);
setInterval(function () {
    if (lollyCount == null) {
        console.log("Lolly Count is null");
    }
    else {
        lollies += passiveLollies;
        lollyCount.textContent = lollies.toFixed(1);
    }
}, 1000);
