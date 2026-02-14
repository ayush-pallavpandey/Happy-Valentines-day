const PASSWORD="TA2302";

const MESSAGES=[
  "You walked into my life and everything became beautiful ❤️",
  "Every moment with you feels like magic ✨",
  "With you, love feels easy and forever feels real 💕",
  "You are my peace, my happiness, my home 🌹",
  "No matter what life brings, I will always choose you ❤️"
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
  music.play().catch(()=>{});
}

function startSlideshow(){
  const slides=document.querySelectorAll(".slide");
  const message=document.getElementById("messageText");
  let current=0;

  message.innerText=MESSAGES[0];

  setInterval(()=>{
    slides[current].classList.remove("active");

    current=(current+1)%slides.length;

    slides[current].classList.add("active");
    message.innerText=MESSAGES[current];

  },5000);
}
