let total = "";
const totalDisplay = document.getElementById("display");

const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clearButton");
const backSpaceButton = document.getElementById("backSpaceButton");
const addButton = document.getElementById("addButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const decimalButton = document.getElementById("decimalButton");

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
    totalDisplay.value = total;
}

equalButton.addEventListener("click", () => {
    const result = math.evaluate(totalDisplay.value);
    totalDisplay.value = result;
});

addButton.addEventListener("click", () => {
    total += "+";
});

minusButton.addEventListener("click", () => {
    total += "-";
});

multiplyButton.addEventListener("click", () => {
    total += "*";
});

divideButton.addEventListener("click", () => {
    total += "/";
});

clearButton.addEventListener("click", () => {
    total = "";
    update();
});

backSpaceButton.addEventListener("click", () => {
    total = total.slice(0, -1);
    update();
});

decimalButton.addEventListener("click", () => {
    if(!total.includes(".")) {
        total += "."
        update();
    }
});

zeroButton.addEventListener("click", () => {
    console.log("0" + total);
    total += "0";
    update();
});

oneButton.addEventListener("click", () => {
    total += "1";
    update();
});

twoButton.addEventListener("click", () => {
    total += "2";
    update();
});

threeButton.addEventListener("click", () => {
    total += "3";
    update();
});

fourButton.addEventListener("click", () => {
    total += "4";
    update();
});

fiveButton.addEventListener("click", () => {
    total += "5";
    update();
});

sixButton.addEventListener("click", () => {
    total += "6";
    update();
});

sevenButton.addEventListener("click", () => {
    total += "7";
    update();
});

eightButton.addEventListener("click", () => {
    total += "8";
    update();
});

nineButton.addEventListener("click", () => {
    total += "9";
    update();
});


