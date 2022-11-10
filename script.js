//since we can get the target of the mouse click, we only need
//an eventlistener on the whole keypad instead of individual divs
const keyPad = document.querySelector('#keypad');
const divs = document.querySelectorAll('div');

keyPad.addEventListener('mousedown', (e) => {
    if (e.target.getAttribute('data-value') != null){
        btnClicked(e.target, 'clicked');
        display(e.target.getAttribute('data-value'));
    }else{
        return;
    }

});

keyPad.addEventListener('mouseup', (e) => {
    if (e.target.getAttribute('data-value') != null){
        btnClicked(e.target, 'unclicked');
    }else{
        return;
    }
});


const keypadPressDown = document.addEventListener('keydown', e=>{
    const keyPressed = e.key;
    divs.forEach(pressedNumKey => {
        if (pressedNumKey.getAttribute('data-value') === e.key){
            btnClicked(pressedNumKey, 'clicked');
            display(e.key);
        }
    })
    
});

const keypadPressUp = document.addEventListener('keyup', e=>{
    const keyPressed = e.key;
    divs.forEach(pressedNumKey => {
        if (pressedNumKey.getAttribute('data-value') === e.key){
            btnClicked(pressedNumKey, 'unclicked');
        }
    })   
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (a != 0 && b != 0){
        return a / b;
    }else{
        return "Divide by 0 error!";
    }
    
}

function operate(a, b, operator){
    switch (operator){
        case "+":
            return add(a, b);
        case "-": 
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const OPERATORS = ["+", "-", "*", "/", "=", "(", ")"];
let selectedOperator = '';

function clear(){
    historyBox.innerHTML = "";
    calcBox.innerHTML = "";
    inputBox.innerHTML = "";
    selectedOperator = "";
}

// first on each button press load the number into div
// second, if operator button pressed, load div into a new variable from the div
// second, clear the div (create copy in 'history' field?) 
// repeat 

/* <div id="calcBox"></div>
<div id="inputBox"></div>
<div id="historyBox"></div> */
const calcBox = document.querySelector('#calcBox');
const inputBox = document.querySelector('#inputBox');
const historyBox = document.querySelector('#historyBox');

function display(input){

    if (OPERATORS.includes(input)){
        if(inputBox.innerHTML.length === 0){
            console.log("Nothing to calculate against!");
        }else if(calcBox.innerHTML.length === 0){
            selectedOperator = input;
            calcBox.innerHTML += inputBox.innerHTML;
            historyBox.innerHTML += inputBox.innerHTML;
            inputBox.innerHTML = "";
        }else{
            let result = operate(parseFloat(calcBox.innerHTML), parseFloat(inputBox.innerHTML), selectedOperator);
            if (input === "="){
                historyBox.innerHTML = result;
            }else{
                historyBox.innerHTML += input + inputBox.innerHTML;
            }
            
            calcBox.innerHTML = result;
            inputBox.innerHTML = "";

        }
    }else if(input === "Clear"){
        clear();
    }else if(input === "Delete"){
        inputBox.innerHTML = inputBox.innerHTML.slice(0, -1);
    }else if(input === "neg"){
        //add logic to make the number negative by multiplying by -1
    }else{
        inputBox.innerHTML += input;
    }
    
   
}

function history(log){

}

function btnClicked(btn, status){
    if (status === 'clicked'){
        btn.classList.add('clicked');
    }else{
        btn.classList.remove('clicked');
    }
}


