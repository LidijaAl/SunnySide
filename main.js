let ham = document.getElementById("ham"); 
let nv = document.getElementById("nv");


ham.addEventListener("click",function(){
       let hamMenu = document.getElementById("ham-menu");

       if(hamMenu.style.display === "flex"){
              hamMenu.style.display = "none";
              nv.style.display= "block";
       }else{
              hamMenu.style.display = "flex";
              nv.style.display= "none";
       }
})
   