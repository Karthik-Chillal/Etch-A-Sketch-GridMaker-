const container=document.querySelector(".container");
color=["red", "blue", "green"];
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
    ele.style.opacity = "0";
    // ele.style.border=`1px solid black`;
    ele.addEventListener("mouseover", (e)=>{
      let currOpacity=Number(e.target.style.opacity);
      e.target.style.backgroundColor=color[Math.floor(Math.random()*3)];
      if(currOpacity<1){
        e.target.style.opacity=currOpacity+0.1;
      }
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