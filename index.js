const container=document.querySelector(".container");
const eraser=document.querySelector(".eraser");
const colorM=document.querySelector(".color-mode");
const clear_=document.querySelector(".clear");
const given=document.querySelector("#range");
const colorChange=document.querySelector("#color-changer");
const para=document.querySelector(".para");

let range=given.value;
let clrchange=colorChange.value;

para.textContent=`${given.value}* ${given.value}`;


let colorMode=true;


given.oninput=()=>{
    range=given.value;
    para.textContent=`${given.value}* ${given.value}`;
    addBox();

}

const createBox=(value)=>{
    return value*value;
}

colorChange.oninput=()=>{
    clrchange=colorChange.value;
    console.log(clrchange);
}

const addBox=()=>{

    container.style.gridTemplateColumns=`repeat(${range},1fr)`;
    container.style.gridTemplateRows=`repeat(${range},1fr)`;

    container.textContent="";
    for(let i=1;i<=createBox(range);i++){
        const div=document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    }
}

const clear= ()=> {
    const boxes = container.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.background = "#ffffff"
    });
}

addBox();


eraser.addEventListener("click",()=>{
    colorMode=false;
})
clear_.addEventListener("click",clear);
colorM.addEventListener("click",()=>{
    colorMode=true;
});

container.addEventListener("mousemove",(e)=>{

    if(e.target.classList.contains("box")){

        if(colorMode){
        e.target.style.background=`${clrchange}`;
        }
    
    else{
        e.target.style.background=`#ffffff`
    }
}


});