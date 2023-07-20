function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers!');
        return;
    }

    const sum = num1 + num2;

    document.getElementById('result').textContent = `Result: ${sum}`;
}

function resetCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';

    document.getElementById('result').textContent = '';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-btn').addEventListener('click', addNumbers);
    document.getElementById('reset-btn').addEventListener('click', resetCalculator);
});