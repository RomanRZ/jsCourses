module("Balls");

/* В одній комп'ютерній грі гравець виставляє в лінію кульки різних кольорів.
Коли утворюється безперервний ланцюжок з трьох і більше кульок одного кольору,
вона видаляється з лінії. Всі кульки при цьому зсуваються один до одного, і
ситуація може повторитися.

Напишіть функцію, яка по даній ситуації визначає, скільки кульок буде
"знищено". Природно, безперервних ланцюжків з трьох і більше одноколірних куль в
початковий момент може бути не більше одного.  */

function countDel(arr) {
  // Write your code here
  let str = arr.join("");
  // Checking for 3+ same elements
  if (str.search(/(.)\1{2,}/) != -1) {
    return (
      // Length of same elements
      +str.match(/(.)\1{2,}/)[0].length +
      // Recursion call
      +countDel(str.replace(/(.)\1{2,}/, "").split(""))
    );
  } else {
    // + empty string if no matches in str: 16 (str.search)
    return "";
  }
}

test("Balls", function() {
  equal(countDel([5, 1, 3, 3, 3, 2]), 3, "");
  equal(countDel([5, 1, 2, 3, 3, 3]), 3, "");
  equal(countDel([3, 3, 3, 2]), 3, "");
  equal(countDel([5, 1, 3, 4, 3, 3]), 0, "");
  equal(countDel([5, 1, 3, 3, 3, 1, 1, 2]), 6, "");
  equal(countDel([9, 5, 5, 1, 3, 3, 3, 1, 1, 5, 5]), 10, "");
});
