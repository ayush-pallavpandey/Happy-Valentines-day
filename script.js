const PASSWORD = "TA2302";

/* UNLOCK */
function unlock() {

  const input = document.getElementById("pass").value;

  if (input === PASSWORD) {

    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";

    startMusic();
    startSlideshow();
    startPetalRain();

  } else {
    document.getElementById("error").innerText = "Wrong password ❤️";
document.getElementById("error").style.color = "red";
  }
}

/* MUSIC */
function startMusic() {
  const music = document.getElementById("music");
  music.volume = 0.6;

  music.play().catch(err => {
    console.log("Music blocked:", err);
  });
}

/* SLIDESHOW */
function startSlideshow() {

  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

  }, 4000);
}

/* CONTINUOUS RANDOM PETAL RAIN */
function startPetalRain() {

  setInterval(() => {

    const petal = document.createElement("img");

    petal.src = "petal.png";   // must exist in root
    petal.style.position = "fixed";
    petal.style.top = "-100px";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.width = (Math.random() * 50 + 40) + "px";
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "9999";

    const duration = Math.random() * 6 + 6;
    petal.style.transition = `transform ${duration}s linear`;

    document.body.appendChild(petal);

    const drift = (Math.random() - 0.5) * 300;

    setTimeout(() => {
      petal.style.transform =
        `translate(${drift}px, 110vh) rotate(${Math.random()*720}deg)`;
    }, 50);

    setTimeout(() => {
      petal.remove();
    }, duration * 1000);

  }, 300);
}
