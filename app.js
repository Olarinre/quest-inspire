// details collcetion

const details = [
    {
        name:"godwin Alugbin",
        utmescore:"301",
        text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit\
            Lorem ipsum dolor sit amet consectetur adipisicing elit\
            Officia et rerum eius debitis fugit optio aliquam facili",
        img:"dp1.jpg"

    },

    {
        name:"obiwole solomon",
        utmescore:"300",
        text:" obiwole solomon is my name ijijugkk\
        Lorem ipsum dolor sit amet consectetur adipisicing elit\
        Officia et rerum eius debitis fugit opjuh",
        img:"dp2.jpg"

    },

    {
        name:"Abiola Mercyi",
        utmescore:"301",
        text:" Lorem ipsum dolor sit a elit\
        Lorem ipsum dolor sit amet consectetur adipisicin\
        Officia et rerum eius debitis fugit optio aliquaili",
        img:"dp.jpg",

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

