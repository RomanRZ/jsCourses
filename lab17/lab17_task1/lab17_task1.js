"use strict";

class Jquery {
  constructor(elems) {
    this.elems = elems;
  }
  addClass(...classNames) {
    this.elems.forEach(el => el.classList.add(...classNames));
    return this;
  }
  removeClass(...classNames) {
    this.elems.forEach(el => el.classList.remove(...classNames));
    return this;
  }
  hasClass(className) {
    return [...this.elems].some(el => {
      return el.classList.contains(className);
    });
  }
  html(text) {
    this.elems.forEach(el => (el.innerHTML = text));
    return this;
  }
  text(text) {
    this.elems.forEach(el => (el.textContent = text));
    return this;
  }
  css(...params) {
    //  .css( styleName )
    if (params.length === 1 && typeof params[0] === "string") {
      if (this.elems.length === 1) {
        let style = getComputedStyle(this.elems[0]);
        return style[params[0]];
      }
    }
    //  .css( styleName, value )
    if (
      params.length === 2 &&
      typeof params[0] === "string" &&
      typeof params[1] === "string"
    ) {
      this.elems.forEach(el => {
        el.style[params[0]] = params[1];
      });
      return this;
    }
    //  .css({styleName: 'value'})
    if (params.length === 1 && typeof params[0] === "object") {
      this.elems.forEach(el => {
        for (let key in params[0]) {
          el.style[key] = params[0][key];
        }
      });
      return this;
    }
  }
}

const $ = selector => {
  let elems = [];
  if (selector === "") {
    throw new Error("Empty string is not valid");
  }
  //   :eq(n) shows current element -n-
  if (selector.indexOf(":") >= 0) {
    let str = selector.split(":");
    let clearedSelector = str[0];
    let method = str[1];
    if (method.indexOf("eq") >= 0) {
      let index = method.match(/-?\d+/g)[0];
      elems = [...document.querySelectorAll(clearedSelector)].slice(
        index,
        +index + 1
      );
    }
    //   :lt(n) shows elements before -n-
    if (method.indexOf("lt") >= 0) {
      let index = method.match(/-?\d+/g)[0];
      elems = [...document.querySelectorAll(clearedSelector)].slice(0, +index);
    }
    // :gt() shows elements after -n-
    if (method.indexOf("gt") >= 0) {
      let index = method.match(/-?\d+/g)[0];
      if (+index === -1) return new Jquery(elems);
      elems = [...document.querySelectorAll(clearedSelector)].slice(+index + 1);
    }
  } else {
    elems = document.querySelectorAll(selector);
  }
  return new Jquery(elems);
};

$(".list-item:eq(2)")
  .addClass("red")
  .text("link link link link")
  .css({ fontSize: "30px", fontStyle: "italic" })
  .addClass("bold");

$(".list-item:lt(2)")
  .addClass("green", "size", "bold")
  .removeClass("bold");

if (!$(".list-item:gt(2)").hasClass("orange")) {
  $(".list-item:gt(2)").addClass("orange");
}

$(".title")
  .html("<span>new Title</span>")
  .css({ color: "brown" });

$("ul").css({ listStyleType: "none" });
