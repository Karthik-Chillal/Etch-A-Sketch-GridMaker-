const container=document.querySelector(".container");
function gridMaker(l){
  container.innerHTML='';
  for(let i=0; i<l*l; i++){
    container.appendChild(document.createElement("div"));
  }
  const boxes = document.querySelectorAll(".container > div");
  boxes.forEach((ele)=>{
    let val=100/l;
    ele.style.width=`${val}%`;
    ele.style.height=`${val}%`;
    // ele.style.border=`1px solid black`;
    ele.addEventListener("mouseover", (e)=>{
      e.target.style.backgroundColor="hsla(0, 0%, 0%, 1.00)";
    });
  });
}
gridMaker(16);
const btn=document.querySelector(".btn > button");
btn.addEventListener("click", (e)=>{

  let len=prompt("Enter Grid size (Max:100)");
  len=Number(len);
  if(len>0 && len<=100){
    gridMaker(len);
  }
  else{
    alert("Give a Valid Input");
  }
});