var story = document.getElementById("story");
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
var lollyArtistButton = document.getElementById("lollyArtist");
var lollyArtistCost = document.getElementById("lollyArtist-price");
var lollyArtistCount = document.getElementById("lollyArtist-count");
var lollyArtistsOwned = 0;
var lollyArtistRate = 17.5;
var lollyArtistPrice = 750;
var facButton = document.getElementById("fac");
var facCost = document.getElementById("fac-price");
var facCount = document.getElementById("fac-count");
var facsOwned = 0;
var facRate = 175;
var facPrice = 5000;
var sugarButton = document.getElementById("sugar");
var sugarPrice = 1000;
var fakeSugarButton = document.getElementById("fakeSugar");
var fakeSugarPrice = 1000;
var betterMouseButton = document.getElementById("betterMouse");
var betterMousePrice = 15000;
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
function buyLollyArtist() {
    if (lollyArtistCost == null || lollyCount == null || passiveLollyCount == null || lollyArtistCount == null) {
        return;
    }
    if (lollies >= lollyArtistPrice) {
        console.log("Sufficient lollies");
        lollyArtistsOwned++;
        lollies -= lollyArtistPrice;
        lollyArtistPrice *= increment;
        passiveLollies += lollyArtistRate;
        lollyArtistCost.textContent = lollyArtistPrice.toFixed(1);
        lollyCount.textContent = lollies.toFixed(1);
        passiveLollyCount.textContent = passiveLollies.toFixed(1);
        lollyArtistCount.textContent = String(lollyArtistsOwned);
    }
}
function buyFac() {
    if (facCost == null || lollyCount == null || passiveLollyCount == null || facCount == null) {
        return;
    }
    if (lollies >= facPrice) {
        console.log("Sufficient lollies");
        facsOwned++;
        lollies -= facPrice;
        facPrice *= increment;
        passiveLollies += facRate;
        facCost.textContent = facPrice.toFixed(1);
        lollyCount.textContent = lollies.toFixed(1);
        passiveLollyCount.textContent = passiveLollies.toFixed(1);
        facCount.textContent = String(facsOwned);
    }
}
function buySugar() {
    if (lollyCount == null || passiveLollyCount == null || sugarButton == null) {
        return;
    }
    if (lollies >= sugarPrice) {
        console.log("Sufficient lollies");
        lollies -= sugarPrice;
        passiveLollies += 50;
        lollyCount.textContent = lollies.toFixed(1);
        sugarButton.style.display = "none";
    }
}
function buyFakeSugar() {
    if (lollyCount == null || passiveLollyCount == null || fakeSugarButton == null || hmLollyCount == null || hmLollyCost == null) {
        return;
    }
    if (lollies >= sugarPrice) {
        console.log("Sufficient lollies");
        lollies -= sugarPrice;
        passiveLollies += 50;
        for (var i = 0; i <= 2; i++) {
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
        lollyCount.textContent = lollies.toFixed(1);
        fakeSugarButton.style.display = "none";
    }
}
function buyBetterMouse() {
    if (lollyCount == null || passiveLollyCount == null || betterMouseButton == null) {
        return;
    }
    if (lollies >= sugarPrice) {
        console.log("Sufficient lollies");
        lollies -= sugarPrice;
        clickPower = 20;
        lollyCount.textContent = lollies.toFixed(1);
        betterMouseButton.style.display = "none";
    }
}
gSnakeButton === null || gSnakeButton === void 0 ? void 0 : gSnakeButton.addEventListener("click", buygSnake);
hmLollyButton === null || hmLollyButton === void 0 ? void 0 : hmLollyButton.addEventListener("click", buyHmLolly);
lollyArtistButton === null || lollyArtistButton === void 0 ? void 0 : lollyArtistButton.addEventListener("click", buyLollyArtist);
facButton === null || facButton === void 0 ? void 0 : facButton.addEventListener("click", buyFac);
sugarButton === null || sugarButton === void 0 ? void 0 : sugarButton.addEventListener("click", buySugar);
fakeSugarButton === null || fakeSugarButton === void 0 ? void 0 : fakeSugarButton.addEventListener("click", buyFakeSugar);
betterMouseButton === null || betterMouseButton === void 0 ? void 0 : betterMouseButton.addEventListener("click", buyBetterMouse);
setInterval(function () {
    if (lollyCount == null) {
        console.log("Lolly Count is null");
    }
    else {
        lollies += passiveLollies;
        lollyCount.textContent = lollies.toFixed(1);
    }
}, 1000);
setInterval(function () {
    if (lollies < 100 && story != null) {
        var stories = [
            "You decide to start making lollies.",
            "You offer your family some of your lollies. They leave without a response.",
            "Your first batch goes straight into the bin. Not even flies go near it."
        ];
        story.textContent = stories[Math.floor(Math.random() * stories.length)];
    }
    else if (lollies < 500 && lollies > 100 && story != null) {
        var stories = [
            "You start selling lollies to your neighbour. You suspect he is giving them to his cats.",
            "You offer your family some of your lollies. They decide to try one.",
            "You think your friends are selling your lollies on eBay."
        ];
        story.textContent = stories[Math.floor(Math.random() * stories.length)];
    }
    else if (lollies < 10000 && lollies > 500 && story != null) {
        var stories = [
            "Your lollies are getting popular in your town.",
            "Your family now asks for lollies because they say they taste good.",
            "Your friends are making mysterious profits. Maybe they did sell your lollies..."
        ];
        story.textContent = stories[Math.floor(Math.random() * stories.length)];
    }
    else if (lollies > 10000 && story != null) {
        var stories = [
            "People come from far away to get a taste of your lollies.",
            "You decided to put one of your lollies up for auction. Someone bidded $43 000 for one.",
            "There is a museum with your first ever lolly. It isn't popular, but it is there. You go every day."
        ];
        story.textContent = stories[Math.floor(Math.random() * stories.length)];
    }
}, 10000);
