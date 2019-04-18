module("Constructor list");

/*
Write a function that returns all constructors present in object's prototype
chain.
*/

function constructorList(object) {
  const arr = [];
  let obj = Object.getPrototypeOf(object);
  while (obj) {
    arr.push(obj.constructor);
    obj = Object.getPrototypeOf(obj);
  }
  arr.push(null);
  return arr;
}
constructorList([]);

test("built-in", function() {
  deepEqual(constructorList([]), [Array, Object, null], "Array");
  deepEqual(constructorList({}), [Object, null], "Object");
});

test("custom", function() {
  var Mammal = function(name) {
    this.name = name;
  };

  function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
  }

  Bat.prototype = Object.create(Mammal.prototype);
  Bat.prototype.constructor = Bat;

  var mammal = new Mammal("Lenny");
  var bat = new Bat("Bobby", "1.5m");

  deepEqual(constructorList(mammal), [Mammal, Object, null], "Mammal");
  deepEqual(constructorList(bat), [Bat, Mammal, Object, null], "Mammal");
});
