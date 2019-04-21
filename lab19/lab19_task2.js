const settingsForm = document.querySelector(".settings__form");
const color = document.querySelector(".settings__color-picker");
const fontSize = document.querySelector(".settings__fontsize-picker");

settingsForm.addEventListener("submit", function(e) {
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }
  e.preventDefault();
  let background = color.value;
  let fzValue = fontSize.value;
  document.body.style.background = background;
  if (isNumber(fzValue)) {
    fontSize.style.border = `2px solid green`;
    fontSize.style.background = `white`;
    document.body.style.fontSize = `${fzValue}px`;
    localStorage.setItem("fontSize", fzValue);
  } else {
    fontSize.style.border = `2px solid red`;
    fontSize.style.background = `#ff8898`;
  }
  localStorage.setItem("background", background);
});

document.addEventListener("DOMContentLoaded", function(e) {
  document.body.style.background = localStorage.getItem("background");
  document.body.style.fontSize = `${localStorage.getItem("fontSize")}px`;
});
