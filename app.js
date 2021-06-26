const display = document.querySelector("#display");
const button = document.querySelectorAll("#btn_txt");
const enterButton = document.querySelector('#enter');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#del');
let firstOperandText = document.querySelector('#firstOperand');
let secondOperandText = document.querySelector('#secondOperand');

let formula = "";
let result = "";

function updateDisplay() {
    firstOperandText.innerText = formula;
    secondOperandText.innerText = result;
}

button.forEach(button => {
    button.addEventListener('click', () => {
        formula += button.innerText;
        updateDisplay();
    })
})

enterButton.addEventListener('click', function(){
    result = "=" + eval(formula);
    updateDisplay();
  }, false)

clearButton.addEventListener('click', () => {
    formula = '';
    result = '';
    operation = undefined;
    updateDisplay();
})

deleteButton.addEventListener('click', () => {
    formula = formula.slice(0,-1);
    updateDisplay();
})