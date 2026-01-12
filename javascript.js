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