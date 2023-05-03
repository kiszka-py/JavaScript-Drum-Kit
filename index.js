const keys = document.querySelectorAll(".key");

const playSound = function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.toggle("playing");

  audio.currentTime = 0;
  audio.play();
};

keys.forEach((key) =>
  key.addEventListener("transitionend", function (e) {
    if (e.propertyName === "transform") {
      console.log(e);
      e.target.classList.remove("playing");
    }
  })
);

document.addEventListener("keydown", playSound);
