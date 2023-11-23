console.log("tic tac toe");
let gameover= new Audio("gameover.mp3");
let music= new Audio("music.mp3");
let ting= new Audio("ting.mp3");
let turn="X";
let isGameOver= false;


//function for change the turn
const changeTurn=()=>{
    turn= (turn ==="X"?"0":"X");
}

//function to check for a win 
const checkWin=()=>{
let boxtexts= document.getElementsByClassName("boxtext");
let wins=[
    [0,1,2,0,5,0],
    [3,4,5,0,15,0],
    [6,7,8,0,25,0],
    [0,3,6,-10,15,90],
    [1,4,7,0,15,90],
    [2,5,8,10,15,90],
    [0,4,8,0,15,45],
    [2,4,6,0,15,135]
]
wins.forEach((e)=>{
if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[2]].innerText===boxtexts[e[1]].innerText && boxtexts[e[0]].innerText!==""){
isGameOver=true;
document.querySelector(".info").innerText= boxtexts[e[0]].innerText + " Won...!!"
gameover.play();
document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "100px";
document.querySelector(".line").style.width = "30vw";
document.querySelector(".line").style.transform=`translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;
}
})

}

//Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
let boxtext= element.querySelector(".boxtext");
element.addEventListener("click",()=>{
    if(!isGameOver){
    if(boxtext.innerText===""){
        boxtext.innerText=turn;
        changeTurn();
        ting.play();
        checkWin();
        if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
        }
    }
}
else{
    document.getElementsByClassName("info")[0].innerText="Reset the game to play again...!!";
}

})

});

//reset button logic
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
         
    });
    document.querySelector(".line").style.width="0vw";
    turn="X";
    isGameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "0px";
})