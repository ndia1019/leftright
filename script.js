let  young = document.querySelector('.young');
let  old = document.querySelector('.old');

let  youngButton = document.querySelector('.youngButton');
let  oldButton = document.querySelector('.oldButton');


let  text = document.querySelector('.text');



let  money = document.querySelector('.money');
money.style.display ="none";

let grave= document. querySelector('.grave');
grave.style.display="none";

let jail=document.querySelector('.jail');
jail.style.display="none";

let emoji= document. querySelector ('.emoji');
emoji.style.display="none";

let survive=document. querySelector('.survive');
survive.style.display="none";

youngButton.addEventListener('click', function (){
    console.log("young is clicked")
    old.style.display ="none";
    young.style.display="help her";
    text.innerHTML="double click to help her or hover over to leave her";
    oldButton.style.display="none";
    youngButton.style.display="none";
    money.style.display="none";
    grave.style.display="none";
    jail.style.display="none";
    emoji.style.display="block";});


emoji.addEventListener ("mouseenter", function(){
   
    jail.style.display="blcok";

});



young.addEventListener('dblclick', function(){
console.log ("young is double clicked")
old.style.display="none";
money.style.display="block";
young.style.display="none";
grave.style.display="none";
text.innerHTML="Thanks for helping her hers a gift";
grave.style.display="none";
jail.style.display="none";
emoji.style.display="none";
survive.style.display="none";

});

oldButton.addEventListener('click', function(){
console.log ( "old is clicked")
money.style.display="noney";
old.style.display="block";
grave.style.display="none";
young.style.display="none";
text.innerHTML="Double click to eat with him or wheel mouse to help him";
youngButton.style.display="none";
jail.style.display="none";
emoji.style.display="none";
survive.style.display="none";
oldButton.style.display="none";
});

emoji.addEventListener ('mouseenter', function(){
console.log("hoover");
money.style.display="none";
old.style.display="none";
grave.style.display="none";
young.style.display="none";
text.innerHTML="should have helped her";
oldButton.style.display="none";
youngButton.style.display="none";
jail.style.display="block";
emoji.style.display="none";
survive.style.display="none";

});

old.addEventListener('dblclick', function(){
console.log ("old is clicked")
old. style.display="none";
young.style.display="none";
money.style.display="none";
grave.style.display="block";
text.innerHTML="you shouldn't have trusted him";
jail.style.display="none";
emoji.style.display="none";
survive.style.display="none";
youngButton.style.display="none";
oldButton.style.display="none";
});

old.addEventListener('wheel', function (){
    console.log ("wheel was clicked");
    old.style.display="none";
    young.style.display="none";
    money.style.display="none";
    grave,style.display="none";
    jail.style.display="none";
    emoji.style.display="none";
    survive.style.display="block";
    youngButton.style.display="none";
oldButton.style.display="none";
});

