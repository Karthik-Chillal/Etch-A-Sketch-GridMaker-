const container=document.querySelector(".container");
let gridh=16;
let gridv=16;
let valh=100/gridh;
let valv=100/gridv;

for(let i=0; i<gridh*gridv; i++){
  container.appendChild(document.createElement("div"));
}
const boxes = document.querySelectorAll(".container > div");
boxes.forEach((ele)=>{
  ele.style.width=`${valh}%`;
  ele.style.height=`${valv}%`;
  ele.style.border=`1px solid black`;
  ele.addEventListener("mouseover", (e)=>{
    e.target.style.backgroundColor="hsl(0, 0%, 63%)";
  });
});