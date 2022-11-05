const theAnswer = 0;

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
    //use this to create a div and fill it with the keyed input from the number keys

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

    const div = document.querySelector('#keypad');

    div.addEventListener('mousedown', (e) => {
        btnClicked(e.target, 'clicked');
    });
    div.addEventListener('mouseup', (e) => {
        btnClicked(e.target, 'unclicked');
    });

    //add a keyup/down event to capture 'Enter' and 'Backspace'

    const divs = document.querySelectorAll('div');
    const keypadPressDown = document.addEventListener('keydown', e=>{
        const keyPressed = e.key;
        divs.forEach(pressedNumKey => {
            if (pressedNumKey.getAttribute('data-value') === e.key){
                btnClicked(pressedNumKey, 'clicked');
                //console.log(`${pressedNumKey.getAttribute('data-value')} clicked!`);
            }
        })
        
    })
    const keypadPressUp = document.addEventListener('keyup', e=>{s
        const keyPressed = e.key;
        divs.forEach(pressedNumKey => {
            if (pressedNumKey.getAttribute('data-value') === e.key){
                btnClicked(pressedNumKey, 'unclicked');
                //console.log(`${pressedNumKey.getAttribute('data-value')} clicked!`);
            }
        })
        
    })
