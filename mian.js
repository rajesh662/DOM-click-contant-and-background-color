
let colors = ["red","blue","green"];

let Button = document.querySelector(".button");

let box = document.querySelector(".box");

Button.addEventListener("click", function(){

     box.style.width="100%";
     box.style.height="50vh";
     box.style.border="2px solid black"
     box.style.background=colors[Math.floor(Math.random()*colors.length)];
      box.style.color ="white";

    box.innerHTML="<p>அன்பின் வழிய துயிர்நிலை அஃதிலார்க்கு <br>என்புதோல் போர்த்த உடம்பு</p>";


});