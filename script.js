let total = "";
const totalDisplay = document.getElementById("display");
totalDisplay.value = total;

const zeroButton = document.getElementById("zeroButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton")
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");

function update() {
    
}

zeroButton.addEventListener("click", () => {
    console.log("0" + total);
    total += "0";

});
