const container=document.querySelector(".container");
let gridh=16;
let gridv=16;

function gridMaker(h, v){
  for(let i=0; i<h*v; i++){
    container.appendChild(document.createElement("div"));
  }
  const boxes = document.querySelectorAll(".container > div");
  boxes.forEach((ele)=>{
    let valh=100/h;
    let valv=100/v;
    ele.style.width=`${valh}%`;
    ele.style.height=`${valv}%`;
    // ele.style.border=`1px solid black`;
    ele.addEventListener("mouseover", (e)=>{
      e.target.style.backgroundColor="hsla(0, 0%, 0%, 1.00)";
    });
  });
}
gridMaker(16, 16);