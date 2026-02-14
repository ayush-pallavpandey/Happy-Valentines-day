const PASSWORD = "TA2302";

const LETTERS = [
  "You walked into my life and everything became beautiful ❤️",
  "Every moment with you feels magical ✨",
  "With you, forever feels real 💕",
  "You are my peace and happiness 🌹",
  "I will always choose you ❤️"
];

function unlock() {
  const input = document.getElementById("pass").value;

  if (input === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";

    startMusic();
    startSlideshow();
  } else {
    document.getElementById("error").innerText = "Wrong password ❤️";
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
function createPetals() {
  for (let i = 0; i < 15; i++) {

    const petal = document.createElement("img");

    petal.src = "petal.png";
    petal.style.position = "fixed";
    petal.style.top = "-120px";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.width = "80px";
    petal.style.zIndex = "9999";
    petal.style.pointerEvents = "none";

    petal.style.transition = "transform 8s linear";

    document.body.appendChild(petal);

    setTimeout(() => {
      petal.style.transform = "translateY(110vh) rotate(360deg)";
    }, 50);

    setTimeout(() => {
      petal.remove();
    }, 8000);
  }
}
