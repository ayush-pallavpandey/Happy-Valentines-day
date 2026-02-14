const PASSWORD="TA2302";

const LETTERS=[
"You walked into my life and everything changed ❤️",
"You are the reason my heart smiles every day ✨",
"With you, love feels magical 💕",
"You are my peace, my happiness 🌹",
"I will always choose you ❤️"
];

function unlock(){
const input=document.getElementById("pass").value;

if(input===PASSWORD){
document.getElementById("login").style.display="none";
document.getElementById("main").style.display="block";

startMusic();
startSlideshow();

}else{
document.getElementById("error").innerText="Wrong password ❤️";
}
}

function startMusic(){
const music=document.getElementById("music");

music.volume=0.5;

music.play().catch(()=>{
console.log("Autoplay blocked");
});
}

function startSlideshow(){
const slides=document.querySelectorAll(".slide");
let index=0;

setInterval(()=>{
slides[index].classList.remove("active");
showLetter(index);

index=(index+1)%slides.length;
slides[index].classList.add("active");

},6000);
}

function showLetter(i){
const letter=document.getElementById("letter");
const text=document.getElementById("letterText");

letter.style.display="flex";
text.innerText=LETTERS[i];

createPetals();

setTimeout(()=>{
letter.style.display="none";
},3500);
}

function createPetals(){
for(let i=0;i<15;i++){
const p=document.createElement("div");
p.className="petal";
p.innerText="🌹";
p.style.left=Math.random()*100+"%";
p.style.animationDuration=(Math.random()*4+4)+"s";
document.body.appendChild(p);

setTimeout(()=>{p.remove();},8000);
}
}
