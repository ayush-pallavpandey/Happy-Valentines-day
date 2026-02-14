const PASSWORD = "TA2302";

const LETTERS = [
  "You walked into my life and everything became beautiful ❤️",
  "Every moment with you feels magical ✨",
  "With you, forever feels real 💕",
  "You are my peace and happiness 🌹",
  "I will always choose you ❤️"
];

function unlock(){
  const input = document.getElementById("pass").value;

  if(input === PASSWORD){
    document.getElementById("login").style.display="none";
    document.getElementById("main").style.display="block";

    startMusic();
    startSlideshow();
    startPetalRain();   // 👈 ADD THIS LINE HERE
  }
}

/* MUSIC */
function startMusic() {
  const music = document.getElementById("music");
  music.volume = 0.8;
  music.play().catch(()=>{});
}

/* SLIDESHOW */
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");

    showLetter(index);

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

  }, 6000);
}

/* LETTER + PETALS */
function showLetter(i) {
  const letter = document.getElementById("letter");
  const text = document.getElementById("letterText");

  text.innerText = LETTERS[i];
  letter.style.display = "flex";

  createPetals();

  setTimeout(() => {
    letter.style.display = "none";
  }, 4000);
}

/* 🔥 GUARANTEED WORKING PETALS */
function startPetalRain() {

  setInterval(() => {

    const petal = document.createElement("img");

    petal.src = "petal.png";
    petal.style.position = "fixed";
    petal.style.top = "-120px";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.width = (Math.random() * 40 + 40) + "px";
    petal.style.zIndex = "9999";
    petal.style.pointerEvents = "none";

    const duration = Math.random() * 5 + 6;
    petal.style.transition = `transform ${duration}s linear`;

    document.body.appendChild(petal);

    const drift = (Math.random() - 0.5) * 200;

    setTimeout(() => {
      petal.style.transform =
        `translate(${drift}px, 110vh) rotate(${Math.random()*720}deg)`;
    }, 50);

    setTimeout(() => {
      petal.remove();
    }, duration * 1000);

  }, 300);
}
