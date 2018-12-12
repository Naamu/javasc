/*string 
const what="namuk";

console.log(what); */

//const what = true;

//number
/*const what=777
console.log(what)*/
/*
const monday = "Mon";
const tuesday = "Mon";


console.log(monday, tuesday);

const dayOfWeek = ["mon","tue","wen",12,true, monday];

console.log(dayOfWeek);
*/

//object
/*const namukInfo = {
  name :"Namuk",
  age : 33,
  gender : "Male",
  face : "Handsome",
  favMovies:["along","LOTR","oldBoy"],
  favFood:[{
    name:"Kimchi",
    fatty:false
  }, {
    name:"burger", fatty:true
  }]
};

namukInfo.gender="Femal";

console.log(console)*/

/*function sayHello(name, age){
  return `Your name is ${name} Your Age is ${age}`;
}

const print_test = sayHello('namuk', 15);
console.log(print_test)*/

/*const cal ={
  add : function(a,b){
    return a+ b
  }
};

const add_test = cal.add(5,5);
console.log(add_test)*/

//const title = document.getElementById("title");
/*title.style.color="white";
title.innerHTML = "Hello Wolds";
console.dir(document);
document.title="fuck"*/

/*
function windowResize(event){
    console.log(event);
}*/
/*
function handleclick(){
    title.style.color = "blue";
}

title.addEventListener("click",handleclick)*/

/*if (10===5||10<5){
    console.log("namuk");

} else{
    console.log('fucking idot');

}*/
/*
const age = prompt('how older are you?')

if(age>18){
    console.log("you can dringk!!")
}else{
    console.log("you cant")
}*/


/*
const title = document.querySelector("#title");


const BASE_COLOR = "rgb(127, 255, 212)";
const OTHER_COLOR = "#7f8c8d";


function handleclick(){
    console.log(title.style.color);
    const currentColor = title.style.color;
    if (currentColor===BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter",handleclick);
}

init();

function handleOffline(){
    console.log("bye bye");
}
function handleOnline(){
    console.log("welcome back!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline); */


const title = document.querySelector("#title");

const clicked_class = "clicked";

/*function handleclick() {
    const hasClass = title.classList.contains(clicked_class);
    //clicked_class가 clicked를 포함하고 있으면 트루 아니면 팔스
    if (hasClass){
        title.classList.remove(clicked_class);        
    }else{        
        title.classList.add(clicked_class);
    }
}*/
function handleclick(){
    title.classList.toggle(clicked_class);
}
//토클 펑션이 클래스 리스트 안의 값을 체크한다. 클래스를 add 또는 리무브

function init(){
    title.addEventListener("click", handleclick);
}

init();