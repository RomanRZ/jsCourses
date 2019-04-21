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
    document.cookie = `fontSize=${fzValue}px; max-age=259200`;
  } else {
    fontSize.style.border = `2px solid red`;
    fontSize.style.background = `#ff8898`;
  }
  document.cookie = `background=${background}; max-age=259200`;
});

document.addEventListener("DOMContentLoaded", function(e) {
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  document.body.style.background = getCookie("background");
  document.body.style.fontSize = getCookie("fontSize");
});
