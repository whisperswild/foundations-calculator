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

}

function clear(){

}

const inputs = [];
let track = 0;
let operator = "";

const inputArray = [];
const inputBox = document.querySelector('#inputBox');
const calcBox = document.querySelector('#calcBox');
const historyBox = document.querySelector('#historyBox');

function display(input){
    const inputText = document.createTextNode(input);
    if(!isNaN(parseInt(input))){
        inputArray[inputArray.length] = input;
        inputs[track] = inputArray.join('');
        inputBox.appendChild(inputText);
    }else if (input === "Backspace" || input === "Delete"){
        inputBox.innerHTML = "";
        inputArray.pop();
        inputArray.forEach(i => {
            inputText = document.createTextNode(i);
            inputBox.appendChild(inputText);
        });
        inputs[track] = inputArray.join('');
    }else if (["+", "-", "*", "/", "="].includes(input) && inputs[0] > 0) {
            if (inputs[1] > 0){
                switch (input){
                    case "+":
                        theAnswer = add(inputs[0], inputs[1]);
                        console.log(theAnswer);
                        break;
                    case "-":
                        theAnswer = subtract(inputs[0], inputs[1]);
                        console.log(theAnswer);
                        break;
                    case "*":
                        theAnswer = multiply(inputs[0], inputs[1]);
                        console.log(theAnswer);
                        break;
                    case "/":
                        theAnswer = divide(inputs[0], inputs[1]);
                        console.log(theAnswer);
                        break;
                }
            }
            inputBox.innerHTML = "Input: ";
            operator = input;
            calcBox.innerHTML += inputs[track] + operator;
            track = 1;
    }else{
        console.log(`Invalid key pressed: ${input}`);
    }

}

function history(log){
//load the history into an array?
}

function btnClicked(btn, status){
    if (status === 'clicked'){
        btn.classList.add('clicked');
    }else{
        btn.classList.remove('clicked');
    }
}
    //since we can get the target of the mouse click, we only need
    //an eventlistener on the whole keypad instead of individual divs
    const keyPad = document.querySelector('#keypad');
    keyPad.addEventListener('mousedown', (e) => {
        btnClicked(e.target, 'clicked');
        display(e.target.getAttribute('data-value'));
    });
    keyPad.addEventListener('mouseup', (e) => {
        btnClicked(e.target, 'unclicked');
    });

    //add a keyup/down event to capture 'Enter' and 'Backspace'
    //convert 'enter' to '=' and handle backspace

    //Loop through all the DIVs and find the one that matches the pressed key..
    const divs = document.querySelectorAll('div');
    const keypadPressDown = document.addEventListener('keydown', e=>{
        const keyPressed = e.key;
        divs.forEach(pressedNumKey => {
            if (pressedNumKey.getAttribute('data-value') === e.key){
                btnClicked(pressedNumKey, 'clicked');
                display(e.key);
            }
        })
        
    })
    const keypadPressUp = document.addEventListener('keyup', e=>{
        const keyPressed = e.key;
        divs.forEach(pressedNumKey => {
            if (pressedNumKey.getAttribute('data-value') === e.key){
                btnClicked(pressedNumKey, 'unclicked');
            }
        })   
    })
