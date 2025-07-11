let total = "";
let currentDisplayValue = "";
let lastInputWasOperator = false;
let expression = "";            
let displayValue = "";          
let justEvaluated = false;

const totalDisplay = document.getElementById("display");

const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clearButton");
const backSpaceButton = document.getElementById("backSpaceButton");
const addButton = document.getElementById("addButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const decimalButton = document.getElementById("decimalButton");
//const percentButton = document.getElementById("percentButton");

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
    totalDisplay.value = displayValue || "";
}

function inputDigit(digit) {
    if (justEvaluated) {
        expression = digit;
        displayValue = digit;
        justEvaluated = false;
    } else {
        expression += digit;
        displayValue += digit;
    }
    update();
}

function inputOperator(op) {
    if (justEvaluated) {
        justEvaluated = false;
    }
    expression += op;
    displayValue = ""; 
    update();
}

function inputDecimal() {
    const currentSegment = expression.split(/[\+\-\*\/]/).pop();
    if (!currentSegment.includes(".")) {
        if (justEvaluated) {
            expression = "0.";
            displayValue = "0.";
            justEvaluated = false;
        } else {
            expression += ".";
            displayValue += ".";
        }
        update();
    }
}

function evaluate() {
    try {
        const result = math.evaluate(expression);
        expression = result.toString();
        displayValue = expression;
        justEvaluated = true;
        update();
    } catch (e) {
        displayValue = "Error";
        expression = "";
        justEvaluated = false;
        update();
    }
}

function clearAll() {
    expression = "";
    displayValue = "";
    justEvaluated = false;
    update();
}

function backspace() {
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        displayValue = displayValue.slice(0, -1);
        justEvaluated = false;
        update();
    }
}

/*function applyPercent() {
    const parts = expression.split(/([\+\-\*\/])/);
    const lastPart = parts.pop();
    const percentValue = (parseFloat(lastPart) / 100).toString();

    parts.push(percentValue);
    expression = parts.join("");
    displayValue = percentValue;
    justEvaluated = false;
    update();
}*/

addButton.addEventListener("click", () => inputOperator("+"));
minusButton.addEventListener("click", () => inputOperator("-"));
multiplyButton.addEventListener("click", () => inputOperator("*"));
divideButton.addEventListener("click", () => inputOperator("/"));

decimalButton.addEventListener("click", inputDecimal);
equalButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clearAll);
backSpaceButton.addEventListener("click", backspace);
//percentButton.addEventListener("click", applyPercent);


zeroButton.addEventListener("click", () => inputDigit("0"));
oneButton.addEventListener("click", () => inputDigit("1"));
twoButton.addEventListener("click", () => inputDigit("2"));
threeButton.addEventListener("click", () => inputDigit("3"));
fourButton.addEventListener("click", () => inputDigit("4"));
fiveButton.addEventListener("click", () => inputDigit("5"));
sixButton.addEventListener("click", () => inputDigit("6"));
sevenButton.addEventListener("click", () => inputDigit("7"));
eightButton.addEventListener("click", () => inputDigit("8"));
nineButton.addEventListener("click", () => inputDigit("9"));


//Keyboard Support

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        // Digit keys (0–9)
        inputDigit(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        inputOperator(key);
    } else if (key === "." || key === ",") {
        inputDecimal();
    } else if (key === "Enter" || key === "=") {
        evaluate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key.toLowerCase() === "c") {
        clearAll();
    } 
    else {
        event.preventDefault();
    }
});
/*
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
});*/