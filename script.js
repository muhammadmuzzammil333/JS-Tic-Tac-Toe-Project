const Buttons = document.querySelectorAll('.box');
const resetBttn = document.getElementById('resetBttn');
let message = document.querySelector('.Msg');
let newBttn = document.getElementById('newBttn');
const messageContainer = document.querySelector('.messageContainer');
// console.log(Buttons);    

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5 ],
    [6, 7, 8],
];

const startBttn = () => {
    turnO = true;
    enabledbttn();
    messageContainer.classList.add('hide'); 
}

const disabledbttn = () => {
    for (let Button of Buttons){
        Button.disabled = true;
    }
}

const enabledbttn = () => {
    for (let Button of Buttons){
        Button.innerText = '';
        Button.disabled = false;
}
}


Buttons.forEach((Button) => {
    Button.addEventListener('click', () => {
        if (turnO) {
            Button.innerText = 'O';
            Button.style.color = '#b0413c'
            turnO = false;
        }
        else {
            Button.innerText = 'X';
            Button.style.color = '#b0413c';
            turnO = true;
        }
        Button.disabled = true;
        checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of winPattern) {

        let pos1Val = Buttons[pattern[0]].innerText;
        let pos2Val = Buttons[pattern[1]].innerText;
        let pos3Val = Buttons[pattern[2]].innerText;


        if (pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);

            }
        }
    };
};


const showWinner = (Winner) => {
     message.innerText = `Congratulation Winner is ${Winner}`; 
   messageContainer.classList.remove('hide');
   disabledbttn();
}




newBttn.addEventListener('click', startBttn);
resetBttn.addEventListener('click', startBttn);