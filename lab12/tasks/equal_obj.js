module("Deep comparison");

/*
Напишіть функцію, яка приймає два значення і повертає true,
тільки якщо це два однакових значення або це об'єкти, властивості
яких мають однакові значення
*/

function deepEqual(a, b) {
  // Write your code here
  if (a === b) {
    return true;
  }
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }
  let propsA = 0,
    propsB = 0;
  for (let prop in a) {
    propsA += 1;
  }
  for (let prop in b) {
    propsB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }
  return propsA == propsB;
}

test("Deep comparison", function() {
  var obj = { here: { is: "an" }, object: 2 };
  equal(deepEqual(obj, obj), true, "один об'єкт");

  equal(deepEqual(obj, { here: 1, object: 2 }), false, "різні об'єкти");

  equal(
    deepEqual(obj, { here: { is: "an" }, object: 2 }),
    true,
    "два однакових об'єкти"
  );

  equal(deepEqual(13, 13), true, "прості типи");

  equal(deepEqual(13, "13"), false, "прості типи");
});
