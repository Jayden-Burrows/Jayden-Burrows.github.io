const addBtn = document.getElementById('addButton');
const subBtn = document.getElementById('subtractButton');
const mulBtn = document.getElementById('multiplyButton');
const divBtn = document.getElementById('divideButton');

const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const output = document.getElementById('output');

let result;

function outputResult() {
    console.log(result);
    if (isNaN(result)) {
        output.value = "Error: Please enter two valid numbers."
        output.style.color = 'red';
    } else {
        if (result < 0) {
            output.value = `-$${(result * -1).toFixed(2)}`;
        } else {
            output.value = `$${result.toFixed(2)}`;
        }
    }
}

function addInputs() {
    result = parseFloat(inputOne.value) + parseFloat(inputTwo.value);
    outputResult();
}

function subInputs() {
    result = parseFloat(inputOne.value) - parseFloat(inputTwo.value);
    outputResult();
}

function multiplyInputs() {
    result = parseFloat(inputOne.value) * parseFloat(inputTwo.value);
    outputResult();
}

function divideInputs() {
    result = parseFloat(inputOne.value) / parseFloat(inputTwo.value);
    outputResult();
}

addBtn.onclick = addInputs;
subBtn.onclick = subInputs;
mulBtn.onclick = multiplyInputs;
divBtn.onclick = divideInputs;