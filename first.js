let userScore =0;
let compScore =0;
 const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userpara =document.querySelector("#userscore");
const comppara =document.querySelector("#compscore");
const gencompochoiceS=()=>{
    const options=["rock", "paper","scissors"];
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];
}
const draw =()=>{
  msg.innerText=("game drawn play again!");
   msg.style.backgroundColor = "brown";
}

const showwinner =(userwin ,userChoice,compchoice)=>{
    if (userwin){
        userScore++;
        userpara.innerText=userScore;
        msg.innerText=(`you win! your ${userChoice} beats ${compchoice}`);
      msg.style.backgroundColor = "green";
    }else {
    compScore++;
    comppara.innerText=compScore;
          msg.innerText=(`you lose! ${compchoice} beats your ${userChoice}`);
            msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
console.log("user choice = ",userChoice);
const compchoice =gencompochoiceS();
console.log("comp choice = ",compchoice);
if(userChoice === compchoice){
    draw();
}else{
    let userwin= true;
    if(userwin === "rock"){
        userwin = compchoice ==="paper"? false:true;
    }
else if(userwin ==="paper"){
    userwin=compchoice==="scissors"?false:true;

}else{
    userwin =compchoice ==="rock"?false:true;
}
showwinner(userwin ,userChoice,compchoice);
}
}

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
