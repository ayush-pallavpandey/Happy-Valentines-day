const PASSWORD = "iloveyou"; // 🔐 Change password here

const today = new Date();
const isFeb14 = today.getMonth() === 1 && today.getDate() === 14;

const lockScreen = document.getElementById("lockScreen");
const passwordScreen = document.getElementById("passwordScreen");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");
const letterOverlay = document.getElementById("letterOverlay");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const finalScreen = document.getElementById("finalScreen");
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");

const messages = [
  "You walked into my life and everything became beautiful ❤️",
  "Every moment with you feels like magic ✨",
  "With you, love feels easy and forever feels real 💕",
  "You are my peace, my happiness, my home 🌹",
  "No matter what life brings, I will always choose you ❤️"
];

let currentSlide = 0;
let interval;

if (isFeb14) {
  lockScreen.style.display = "none";
  passwordScreen.style.display = "flex";
}

document.getElementById("unlockBtn").addEventListener("click", () => {
  const input = document.getElementById("passwordInput").value;

  if (input === PASSWORD) {
    passwordScreen.style.display = "none";
    introScreen.style.display = "flex";

    music.volume = 0;
    music.play();
    fadeInMusic();

    setTimeout(() => {
      introScreen.style.display = "none";
      mainContent.style.display = "flex";
      startSlideshow();
    }, 5000);

  } else {
    document.getElementById("errorMessage").style.display = "block";
  }
});

function fadeInMusic() {
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.5) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

function startSlideshow() {
  interval = setInterval(() => {
    slides[currentSlide].classList.add("fade-black");
    setTimeout(openLetter, 2000);
  }, 6000);
}

function openLetter() {
  clearInterval(interval);
  letterOverlay.style.display = "flex";
  letter.classList.add("show");
  music.volume = 0.2;

  let text = messages[currentSlide];
  let i = 0;
  typedText.innerHTML = "";

  function type() {
    if (i < text.length) {
      typedText.innerHTML += text[i];
      i++;
      setTimeout(type, 60);
    } else {
      setTimeout(closeLetter, 3000);
    }
  }

  type();
}

function closeLetter() {
  letter.classList.remove("show");
  letterOverlay.style.display = "none";
  music.volume = 0.5;

  slides[currentSlide].classList.remove("active", "fade-black");
  currentSlide++;

  if (currentSlide >= slides.length) {
    mainContent.style.display = "none";
    finalScreen.style.display = "flex";
    return;
  }

  slides[currentSlide].classList.add("active");
  startSlideshow();
}
