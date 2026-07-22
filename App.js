const words=[
"Full Stack Developer",
"MERN Stack Learner",
"Web Developer",
"Problem Solver"
];

let i=0;

function type(){

document.getElementById("typing").innerHTML=words[i];

i++;

if(i==words.length){
i=0;
}

}

setInterval(type,2000);

type();

function showMessage(){

document.getElementById("msg").innerHTML="Thank you for visiting my portfolio!";

}
