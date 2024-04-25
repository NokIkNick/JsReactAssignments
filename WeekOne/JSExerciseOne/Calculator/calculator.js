'use-strict';

const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const calculateButton = document.getElementById("calculate");

buttons.addEventListener('click', event => {
    let input = event.target.innerText;
    event.preventDefault();     
    console.log(input);
    updateDisplay(input);
});

calculateButton.addEventListener('click', event => {
    event.stopPropagation();
    let displayInput = display.innerText;
    let result = calculate(displayInput);
    display.innerText = result;
    
})

function updateDisplay(input){
    if(input === undefined){
        console.log(input);
    }

    display.innerText += input;

}

function calculate(input){
    return Number(eval(input));
}
