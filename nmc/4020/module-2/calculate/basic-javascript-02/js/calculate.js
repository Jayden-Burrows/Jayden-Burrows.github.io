const deleteBtn = document.getElementById('deleteButton');
const clearBtn = document.getElementById('clearButton');

const inputs = document.querySelectorAll('.flex button');
const output = document.getElementById('output');

let equation = "";
let result;

inputs.forEach(input => {
    if (input.dataset.value != '=') {
        input.onclick = () => {
            equation += input.dataset.value;
            updateEq();
        }
    } else {
        input.onclick = () => {
            evaluateEq();
        }
    }
})

function evaluateEq() {
    try {
        result = eval(equation);
        equation = result;
        output.value = result;
    } catch (error) {
        output.value = error;
    }
}

function updateEq() {
    output.value = equation;
}

function del() {
    equation = equation.slice(0, -1);
    updateEq();
}

function clear() {
    equation = "";
    updateEq();
}

deleteBtn.onclick = del;
clearBtn.onclick = clear;