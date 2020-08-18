// details collcetion

const details = [
    {
        name:"olarinreayo",
        utmescore:"301",
        text:
            " wow! i am very excited about my performance in the last utme exam.\
            well, i would say this is as a result of the combined hardwork of the sound teachers at Quest-inspire\
            and mine also.  All thanks to God, all thanks to quest-inspire.",
        img:"dp.jpg"

    },

    {
        name:"M. Abubarka",
        utmescore:"300",
        text:" i would like to acknowledge the role Quest-inspire played in my academic life; i enrolled for classes and did very well in all my exams\
        now, I am a student of the very first and best university in Nigeria. ",
        img:"abu.jpg"

    },

    {
        name:"Idowu Oladimeji",
        utmescore:"301",
        text:"Quest-inspire delivers the best in terms of lectures, consultacy services and quality registrations;\
         i let Quest-inspire handle all my registrations.  ",
        img:"dimeji.png",

    },

];

// 
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");

const Img = document.getElementById("display-img");
const utmescore =document.getElementById("utme-score");
const info = document.getElementById("info");
const name = document.getElementById("fullname");

let currentitem = 0;


window.addEventListener('DOMContentLoaded', function(){
    displayperson();
    
     

});

function displayperson(){
    const item = details[currentitem];
    Img.src = item.img;
    name.textContent = item.name;
    utmescore.textContent = item.utmescore;
    info.textContent = item.text;
}
  

// pre and next btn navigation.
nextbtn.addEventListener('click', function(){
    currentitem++;
    if (currentitem > details.length -1){
        currentitem = 0;
    }
    displayperson(currentitem);

});

prevbtn.addEventListener('click', function(){
    currentitem--;
    if (currentitem < 0){
        currentitem = details.length -1;
    }
    displayperson(currentitem);

});

// seting interval for navigation
let random = setInterval(function every10se(){
    currentitem++;
    if (currentitem > details.length -1){
        currentitem = 0;
    }
    displayperson(currentitem);
}, 10000);

//  up arrow function

