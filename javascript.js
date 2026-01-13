const result = document.getElementById("result");

function clearDisplay() {
    result.value = "";
}

function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const current = result.value || '';
    const lastChar = current.slice(-1);

    if (operators.includes(input)) {
        if (current === '' && input !== '-') return;
        if (operators.includes(lastChar)) return;
    }

    result.value += input;
}

function calculate() {
    const expression = result.value || '';
    if (!expression) return;

    const operators = ['+', '-', '*', '/'];
    let exp = expression;
    if (operators.includes(exp.slice(-1))) exp = exp.slice(0, -1);

    if (!/^[0-9+\-*/.\s]+$/.test(exp)) {
        result.value = 'Error';
        return;
    }

    try {
        const value = Function('"use strict"; return (' + exp + ')')();
        if (value === undefined || Number.isNaN(value) || !Number.isFinite(value)) {
            result.value = 'Error';
        } else {
            result.value = String(value);
        }
    } catch (e) {
        result.value = 'Error';
    }
}
