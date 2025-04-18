let boxes = document.querySelectorAll('.box');

var reset = document.querySelector('.Reset');

let newGameBtn = document.querySelector(".newBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
};

reset.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

boxes.forEach((box) =>{
    box.addEventListener('click',() =>{
        console.log('box was clicked');
        if (turnO){
            box.innerText = 'O';
            turnO = false;
        }  else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner ();
    });
});

const showWinner = (Winner) => {
    console.log("🏆 Winner detected:", Winner);  // ✅ Check this
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");

    const showWinner = (Winner) => {
        msg.innerText = `Congratulations, Winner is ${Winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };
    
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
     
    if(pos1Val != "" &&pos2Val != "" && pos3Val != ""){
    if (pos1Val === pos2Val && pos2Val === pos3Val){
        console.log('winner',pos1Val);
        showWinner(pos1Val); 
    }
  }
  }
  
};