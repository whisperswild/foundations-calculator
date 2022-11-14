//since we can get the target of the mouse click, we only need
//an eventlistener on the whole keypad instead of individual divs
const calculator = document.querySelector('#calculator');
const divs = document.querySelectorAll('div');

calculator.addEventListener('mousedown', (e) => {
    if (e.target.getAttribute('data-value') != null){
        btnClicked(e.target, 'clicked');
        display(e.target.getAttribute('data-value'));
    }else{
        return;
    }

});

calculator.addEventListener('mouseup', (e) => {
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
    calcBox = 0;
    inputBox.innerHTML = "";
    historyBox.innerHTML = "";
    selectedOperator = "";
    input = 0;
}

// first on each button press load the number into div
// second, if operator button pressed, load div into a new variable from the div
// second, clear the div (create copy in 'history' field?) 
// repeat 

/*<div id="inputBox"></div>
<div id="historyBox"></div> */
let calcBox = 0;
const inputBox = document.querySelector('#inputBox');
const historyBox = document.querySelector('#historyBox');
let result = 0;

function display(input){

    console.log(input);

    if (OPERATORS.includes(input)){
        if(inputBox.innerHTML.length === 0){
            if(historyBox.innerHTML.length === 0){
                console.log("Nothing to calculate against!");
            }else{
                historyBox.innerHTML = `${result} ${input}`;
                selectedOperator = input;
            }
           
        }else if(calcBox === 0){
                selectedOperator = input;
                calcBox = inputBox.innerHTML;
                historyBox.innerHTML = calcBox + selectedOperator;
                inputBox.innerHTML = "";
        }else{
            result = operate(parseFloat(calcBox), parseFloat(inputBox.innerHTML), selectedOperator);
            if (result == null){
                result = "Error calculating. Press Clear to reset calculator!";
            }
            if (input === "="){
                selectedOperator = "=";
                historyBox.innerHTML = result;
                calcBox = 0;
                selectedOperator = "";
            }else{
                historyBox.innerHTML += inputBox.innerHTML + input;
                selectedOperator = input;
            }
            
            calcBox = result;
            inputBox.innerHTML = "";

            //do some funny stuff depending on the inputs..?

        }
    }else if(input === "Clear"){
        clear();
    }else if(input === "Delete"){
        inputBox.innerHTML = inputBox.innerHTML.slice(0, -1);
    }else if(input === "neg"){
        inputBox.innerHTML = inputBox.innerHTML * -1;
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


