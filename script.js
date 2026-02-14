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

    startMusic();      // 🔥 start music after user click
    startSlideshow();

  } else {
    document.getElementById("error").innerText = "Wrong password ❤️";
  }
}

function startMusic() {
  const music = document.getElementById("music");

  music.volume = 0.7;

  // Force play after click
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Music playing");
      })
      .catch(error => {
        console.log("Autoplay blocked:", error);
      });
  }
}

function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {

    slides[index].classList.remove("active");

    showLetter(index);

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

  }, 5000);
}

function showLetter(i) {
  const letter = document.getElementById("letter");
  const text = document.getElementById("letterText");

  letter.style.display = "flex";
  text.innerText = LETTERS[i];

  setTimeout(() => {
    letter.style.display = "none";
  }, 3000);
}
