const hexnumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const hexbtn = document.getElementById("hexbtn");

const bodybcg = document.getElementById("body");

const hex = 
document.getElementById("hex");


hexbtn.addEventListener ("click",get) 

function get() {
  let hexcol = '#';
  for (let i = 0; i<6;i++) {
    let random = Math.floor(Math.random()*hexnumber.length);
    hexcol += hexnumber[random];
    
  }
    
      bodybcg.style.backgroundColor = hexcol;
  hex.innerHTML = hexcol;
  

  
};


