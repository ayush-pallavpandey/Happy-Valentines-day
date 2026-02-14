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

function startMusic() {
  const music = document.getElementById("music");

  music.volume = 0.5;

  music.play().catch(() => {
    console.log("Autoplay blocked. User interaction required.");
  });
}

function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");

    showLetter(current);

    current = (current + 1) % slides.length;
    slides[current].classList.add("active");

  }, 5000);
}

function showLetter(index) {
  const letter = document.getElementById("letter");
  const text = document.getElementById("letterText");

  letter.style.display = "flex";
  text.innerText = LETTERS[index];

  setTimeout(() => {
    letter.style.display = "none";
  }, 3000);
}
