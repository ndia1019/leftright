let  left = document.querySelector('.left');
let  right = document.querySelector('.right');
let  leftRight = document.querySelector('.leftRight');
let text= document.querySelector('p');
let  pizza = document.querySelector('.pizza');
pizza.style.display ="none";
let burp = document.querySelector('.burp');
burp.style.display="none";

left.addEventListener('click', function() {

    console.log("left is clicked")

    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    pizza.style.display ="block";
  
text.innerHTML= "double click to eat or find something heathy";
});

pizza.addEventListener('dblclick', function(){
console.log("pizza dlb clicked ")
pizza.style.display ="none"; 
left.style.display ="none";
right.style.display="none";
burp.style.display="block";
text.innerHTML= "thats good pizza"
});