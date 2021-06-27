const slide = document.querySelector(".menu-slide");
const arrowUp = document.querySelectorAll(".fa-angle-up");
const arrowDown = document.querySelectorAll(".fa-angle-down");
const answer = document.querySelectorAll(".answer");
const barsHidden = document.querySelector(".fa-bars");
const barsShow = document.querySelector(".fa-times");
const bars = document.querySelector(".bars");
const menuBar = document.querySelector(".menu-bar");
//=================Menu Desktop===========
const changeIcon = function (elUp, elDown) {
  arrowUp.forEach((val) => {
    val == elUp ? elUp.classList.toggle("hidden") : val.classList.add("hidden");
  });
  arrowDown.forEach((val) => {
    val == elDown
      ? elDown.classList.toggle("hidden")
      : val.classList.remove("hidden");
  });
};

const showAnswer = function (el) {
  answer.forEach((val) => {
    if (val == el) return;
    val.classList.add("hidden");
  });
  el.classList.toggle("hidden");
};

const slider = function (event) {
  if (
    event.target.classList.contains("arrow") ||
    event.target.classList.contains("question") ||
    event.target.classList.contains("question-para")
  ) {
    const parentEl = event.target.closest(".query");
    const rightAnswer = parentEl.querySelector(".answer");
    const iconUp = parentEl.querySelector(".fa-angle-up");
    const iconDown = parentEl.querySelector(".fa-angle-down");
    showAnswer(rightAnswer);
    changeIcon(iconUp, iconDown);
  } else {
    console.log("not");
    console.log(event.target);
  }
};

slide.addEventListener("click", slider);

//====================Menu Mobile==================
bars.addEventListener("click", function (event) {
  event.preventDefault();
  barsShow.classList.toggle("hidden");
  barsHidden.classList.toggle("hidden");
  barsShow.classList.contains("hidden")
    ? (menuBar.style.display = "none")
    : (menuBar.style.display = "flex");
});

// =========================MediaQuery=======================
const addMediaQuery = function (mediaDesktop) {
  if (mediaDesktop.matches) {
    console.log("widder");
    menuBar.style.display = "flex";
  } else {
    console.log("narrow");
    menuBar.style.display = "none";
  }
};
const mediaDesktop = window.matchMedia("(min-width:44.5em)");
addMediaQuery(mediaDesktop);
mediaDesktop.addListener(addMediaQuery);
