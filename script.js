let displayInputLogic = "0";
let displayOperationLogic = "";
let operation;
let num1;

const displayInput = document.querySelector('.display-input');
const displayOperation = document.querySelector('.display-operation');

const btnNums = document.querySelectorAll('.btn-update');
const btnOperations = document.querySelectorAll('.btn-operation');

const btnClear = document.querySelector('.btn-clear');
const btnEval = document.querySelector('.btn-eval');

btnNums.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(displayInput.textContent === "0") {
            displayInput.textContent = e.target.textContent;
            displayInputLogic = e.target.textContent;
        }
        else {
            displayInput.textContent += e.target.textContent;
            displayInputLogic += e.target.textContent;
        }
    });
});

btnOperations.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(displayOperationLogic === "") {
            displayOperation.textContent += (displayInputLogic + e.target.textContent);
            displayOperationLogic += (displayInputLogic + e.target.textContent);
            displayInputLogic = "0";
            displayInput.textContent = displayInputLogic;
            operation = e.target.textContent;
            num1 = parseInt(displayOperationLogic.split(operation));
        }
        else {
            let calculation = (Math.round(operate(operation, num1, parseInt(displayInputLogic.split(operation))) * 100) / 100).toString();
            operation = e.target.textContent;
            displayOperationLogic = (calculation + operation);
            displayOperation.textContent = displayOperationLogic;
            displayInputLogic = "0";
            displayInput.textContent = displayInputLogic;
            num1 = parseInt(displayOperationLogic.split(operation));
        }
    });
});

btnEval.addEventListener('click', (e) => {
    let check = displayOperationLogic.includes('=');

    if(displayOperationLogic != "" && !check) {
        displayOperation.textContent += (displayInput.textContent + e.target.textContent);
        displayOperationLogic += (displayInputLogic + e.target.textContent);
        let calculation = (Math.round(operate(operation, num1, parseInt(displayInputLogic.split(operation))) * 100) / 100).toString();
        displayInput.textContent = calculation;
        displayInputLogic = calculation;
    }
});

btnClear.addEventListener('click', () => {
    displayInputLogic = "0";
    displayInput.textContent = "0";
    displayOperationLogic = "";
    displayOperation.textContent = "";
});

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
     return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operate(operation, a, b) {
    if(operation === '+') {
        return add(a, b);
    }
    else if(operation === '-') {
        return subtract(a, b);
    }
    else if(operation === '*') {
        return multiply(a, b);
    }
    else if(operation === '/') {
        return divide(a, b);
    }
}