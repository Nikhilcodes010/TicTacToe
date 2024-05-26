const boxes=document.querySelectorAll(".button");
const msg=document.querySelector("#msg");
const msgc=document.querySelector(".msg-container");
const reset=document.querySelector("#reset-btn");
const newbtn=document.querySelector("#new-btn");
var count=0;
let turnX=true;


boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
            box.disabled=true;
        }
        else{
            box.innerText="O";
            turnX=true;
            box.disabled=true;
        }
        count++;
        var winner=checkWinner();
    })
})



const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

const draw=()=>{
    if(count==9 && checkWinner ){
        msgc.classList.remove("hide");
        msg.innerText="DRAW, Play Again!!"
        return;
    }
    
}

const checkWinner=()=>{
    draw();
    winPatterns.forEach((pattern)=>{

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos1===pos3){
            showWinner(pos1);
            
            return true;
        }
        else{
            return false;
        }
    }
})
}
const disable=(boxes) =>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enable=(boxes) =>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
        turnX=true;
    })
}
const showWinner=(pos1)=>{
    msg.innerText=`Winner is ${pos1}!!! `;
    msgc.classList.remove("hide");
    disable(boxes);

}

reset.addEventListener("click",()=>{
            boxes.forEach((box)=>{
            enable(boxes);
        })
        
 })

newbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        enable(boxes);
    })
    msgc.classList.add("hide");
})
    