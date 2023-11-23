let currentValue = '';
let currentOperator = '';
let waitingForSecondOperand = false;

function appendValue(value) {
    if (waitingForSecondOperand) {
        currentValue = value;
        waitingForSecondOperand = false;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentValue !== '') {
        if (currentOperator !== '') {
            calculate();
        }
        currentOperator = operator;
        waitingForSecondOperand = true;
    }
}

function appendDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentValue = '';
    currentOperator = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

function calculate() {
    if (currentOperator !== '' && currentValue !== '') {
        switch (currentOperator) {
            case '+':
                currentValue = (parseFloat(currentValue) + parseFloat(currentValue)).toString();
                break;
            case '-':
                currentValue = (parseFloat(currentValue) - parseFloat(currentValue)).toString();
                break;
            case '*':
                currentValue = (parseFloat(currentValue) * parseFloat(currentValue)).toString();
                break;
            case '/':
                if (parseFloat(currentValue) !== 0) {
                    currentValue = (parseFloat(currentValue) / parseFloat(currentValue)).toString();
                } else {
                    currentValue = 'Error';
                }
                break;
            default:
                break;
        }
        currentOperator = '';
        waitingForSecondOperand = true;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentValue;
}
