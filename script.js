let total = "";
let currentDisplayValue = "";
let lastInputWasOperator = false;

const totalDisplay = document.getElementById("display");

const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clearButton");
const backSpaceButton = document.getElementById("backSpaceButton");
const addButton = document.getElementById("addButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const decimalButton = document.getElementById("decimalButton");
const percentButton = document.getElementById("percentButton");

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
    totalDisplay.value = currentDisplayValue;
}

function checkMathSymbol() {
    console.log(total);
    if (!total.includes("+")) {
        console.log("test");
        update();
    }
}

equalButton.addEventListener("click", () => {
    try {
        const result = math.evaluate(total);
        total = result.toString(); 
        totalDisplay.value = result;
    } catch (err) {
        totalDisplay.value = "Error";
        total = "";
    }
});

addButton.addEventListener("click", () => {
    total += "+";
    lastInputWasOperator = true;
});

minusButton.addEventListener("click", () => {
    total += "-";
    lastInputWasOperator = true;
});

multiplyButton.addEventListener("click", () => {
    total += "*";
    lastInputWasOperator = true;
});

divideButton.addEventListener("click", () => {
    total += "/";
    lastInputWasOperator = true;
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
    const lastNumber = total.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes(".")) {
        total += ".";
        if (lastInputWasOperator) {
            currentDisplayValue = "0.";
            lastInputWasOperator = false;
        } else {
            currentDisplayValue += ".";
        }
        update();
    }
});


percentButton.addEventListener("click", () => {
    total += "%";
    lastInputWasOperator = true;
})

zeroButton.addEventListener("click", () => {
    console.log("0" + total);
    total += "0";
    update();
});

oneButton.addEventListener("click", () => {
    total += "1";
    if (lastInputWasOperator) {
        currentDisplayValue = "1";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "1";
    }
    update();
});

twoButton.addEventListener("click", () => {
    total += "2";
    if (lastInputWasOperator) {
        currentDisplayValue = "2";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "2";
    }
    update();
});

threeButton.addEventListener("click", () => {
    total += "3";
    if (lastInputWasOperator) {
        currentDisplayValue = "3";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "3";
    }
    update();
});

fourButton.addEventListener("click", () => {
    total += "4";
    if (lastInputWasOperator) {
        currentDisplayValue = "4";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "4";
    }
    update();
});

fiveButton.addEventListener("click", () => {
    total += "5";
    if (lastInputWasOperator) {
        currentDisplayValue = "5";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "5";
    }
    update();
});

sixButton.addEventListener("click", () => {
    total += "6";
    if (lastInputWasOperator) {
        currentDisplayValue = "6";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "6";
    }
    update();
});

sevenButton.addEventListener("click", () => {
    total += "7";
    if (lastInputWasOperator) {
        currentDisplayValue = "7";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "7";
    }
    update();
});

eightButton.addEventListener("click", () => {
    total += "8";
    if (lastInputWasOperator) {
        currentDisplayValue = "8";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "8";
    }
    update();
});

nineButton.addEventListener("click", () => {
    total += "9";
    if (lastInputWasOperator) {
        currentDisplayValue = "9";
        lastInputWasOperator = false;
    } else {
        currentDisplayValue += "9";
    }
    update();
});

//Keyboard Support

document.addEventListener("keydown", (event) => {
    if(event.key === "0") {
        total += "0";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "1") {
        total += "1";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "1") {
        total += "1";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "2") {
        total += "2";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "3") {
        total += "3";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "4") {
        total += "4";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "5") {
        total += "5";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "6") {
        total += "6";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "7") {
        total += "7";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "8") {
        total += "8";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "9") {
        total += "9";
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === ".") {
        if(!total.includes(".")) {
            total += "."
            update();
        }
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "+") {
        total += "+";
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "-") {
        total += "-"
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === "*") {
        total += "*"
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === "/") {
        total += "/"
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "=") {
        const result = math.evaluate(totalDisplay.value);
        totalDisplay.value = result;
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Backspace") {
        total = total.slice(0, -1);
        update();
    }
});