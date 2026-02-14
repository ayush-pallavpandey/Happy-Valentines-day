const PASSWORD = "TA2302";

const LETTERS = [
  "You walked into my life and everything became beautiful ❤️",
  "Every moment with you feels like magic ✨",
  "With you, love feels easy and forever feels real 💕",
  "You are my peace, my happiness, my home 🌹",
  "No matter what life brings, I will always choose you ❤️"
];

const dateLock = document.getElementById("dateLock");
const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");
const unlockBtn = document.getElementById("unlockBtn");
const errorMsg = document.getElementById("errorMsg");
const bgMusic = document.getElementById("bgMusic");

const today = new Date();
if (today.getMonth() === 1 && today.getDate() === 14) {
  passwordScreen.classList.remove("hidden");
} else {
  dateLock.classList.remove("hidden");
}

unlockBtn.onclick = () => {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    passwordScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
    bgMusic.play();
    startSlideshow();
  } else {
    errorMsg.innerText = "Wrong password ❤️";
  }
};

function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    slides[current].classList.add("fade-black");

    setTimeout(() => {
      openLetter(current);
      slides[current].classList.remove("fade-black");

      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 1000);

  }, 6000);
}

function openLetter(index) {
  const modal = document.getElementById("letterModal");
  const text = document.getElementById("letterText");

  modal.classList.add("show");
  text.innerText = LETTERS[index];

  setTimeout(() => {
    modal.classList.remove("show");
  }, 4000);
}
