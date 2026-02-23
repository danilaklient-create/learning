// Get the display input element
const display = document.querySelector('.calc');

// Calculator state
let currentInput = '';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

// Initialize the display
display.value = '0';

// Add event listeners to all number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value') || button.textContent;
        
        if (value === 'R') {
            calculate();
            return;
        }
        
        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }
        
        if (value === '.' && currentInput.includes('.')) {
            return; // Prevent multiple decimals
        }
        
        currentInput += value;
        display.value = currentInput;
    });
});

// Add event listeners to operator buttons
document.querySelector('.add').addEventListener('click', () => setOperator('+'));
document.querySelector('.subtract').addEventListener('click', () => setOperator('-'));
document.querySelector('.multiply').addEventListener('click', () => setOperator('*'));
document.querySelector('.divide').addEventListener('click', () => setOperator('/'));

// Decimal button (if not already covered by number buttons)
document.querySelector('.decimal').addEventListener('click', () => {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    
    if (!currentInput.includes('.')) {
        currentInput += currentInput === '' ? '0.' : '.';
        display.value = currentInput;
    }
});

// Clear button
document.querySelector('.clear').addEventListener('click', clear);

// Equals button
document.querySelector('.equals').addEventListener('click', calculate);

// Function to set operator
function setOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    
    if (previousInput !== '' && currentInput !== '' && operator) {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput || previousInput;
    currentInput = '';
    shouldResetDisplay = false;
}

// Calculate function
function calculate() {
    if (previousInput === '' || currentInput === '' || !operator) {
        if (currentInput !== '') {
            display.value = currentInput;
        }
        return;
    }
    
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
                clear();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    // Handle decimal precision
    result = Math.round(result * 10000000000) / 10000000000;
    
    display.value = result.toString();
    previousInput = result.toString();
    currentInput = '';
    operator = null;
    shouldResetDisplay = true;
}

// Clear function
function clear() {
    currentInput = '';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    display.value = '0';
}

// Handle keyboard support (optional)
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if (/[0-9]/.test(key)) {
        document.querySelector(`.number[data-value="${key}"]`)?.click();
    } else if (key === '.') {
        document.querySelector('.decimal')?.click();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        const operatorMap = {
            '+': '.add',
            '-': '.subtract',
            '*': '.multiply',
            '/': '.divide'
        };
        document.querySelector(operatorMap[key])?.click();
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clear();
    } else if (key === 'r' || key === 'R') {
        calculate();
    }
});
