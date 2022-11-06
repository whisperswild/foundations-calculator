const theAnswer = 0;
const secondNumber = 0;
const inputArray = [0];
const calcArray = [0];
const historyArray = [0];

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

function display(input){

    const inputBox = document.querySelector('#inputBox');
    if(!isNaN(parseInt(input))){
        inputArray[inputArray.length] = input;
        const inputText = document.createTextNode(input);
        inputBox.appendChild(inputText);
    }else if (input === "Backspace" || input === "Delete"){
        if(inputArray.length > 0){
            inputArray.pop();
        }
        inputBox.innerHTML = "";
        inputArray.forEach(i => {
            inputText = document.createTextNode(i);
            inputBox.appendChild(inputText);
        })
    }else if (input === "="){
        inputArray.forEach(inputItem=>{
            console.log(inputItem);
        });
    }else if (["+", "-", "*", "/"].includes(input)){
        //operator found, store the current number and operator then reset the inputArray
        //also clear out the inputbox and move it all to the calcbox
        inputArray.forEach(i => {
            calcArray[calcArray.length] += i;
        });
        calcArray[calcArray.length] = input;
        
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
