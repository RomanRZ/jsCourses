"use strict";
// Task-1
document.querySelector(".mousein").addEventListener("mousemove", e => {
  e.target.classList.add("event");
});
document.querySelector(".mouseout").addEventListener("mouseout", e => {
  e.target.classList.add("event");
});
document.querySelector(".mouseover").addEventListener("mouseover", e => {
  e.target.classList.add("event");
});
document.querySelector(".mousedown").addEventListener("mousedown", e => {
  e.target.classList.add("event");
});
document.querySelector(".mouseup").addEventListener("mouseup", e => {
  e.target.classList.add("event");
});
document.querySelector(".click").addEventListener("click", e => {
  e.target.classList.add("event");
});

// Task-2
document.querySelector(".calc__buttons").addEventListener("click", function(e) {
  const result = document.querySelector(".result");
  const screen = document.querySelector(".calc__screen");
  const target = e.target;
  const inFocus = document.querySelector(".calc__focus");
  if (
    target.classList.contains("calc__btn") &&
    !target.classList.contains("calc__btn--S")
  ) {
    screen.value += target.textContent;
    inFocus.innerHTML = `<p>In focus: ${target.textContent}</p>`;
  }
  if (target.classList.contains("calc__btn--C")) {
    screen.value = "";
  }
  if (target.classList.contains("calc__btn--S") && screen.value) {
    const p = document.createElement("p");
    p.innerHTML = screen.value;
    result.appendChild(p);
    screen.value = "";
  }
  if (target.classList.contains("calc__btn--S")) {
    inFocus.innerHTML = `<p>In focus: ${target.textContent}</p>`;
  }
});

document.querySelector(".calc__buttons").addEventListener(
  "focus",
  function(e) {
    const inFocus = document.querySelector(".calc__focus");
    inFocus.innerHTML = `<p>In focus: ${
      document.activeElement.textContent
    }</p>`;
  },
  true
);

document.querySelector(".calc__buttons").addEventListener(
  "blur",
  function(e) {
    const inFocus = document.querySelector(".calc__focus");
    if (document.activeElement) {
      inFocus.innerHTML = `<p>In focus: </p>`;
    }
  },
  true
);
