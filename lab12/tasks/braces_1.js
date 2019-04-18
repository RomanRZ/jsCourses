module("Braces simple");

/*
Write a function that validates a series of braces.
*/

function validSequence1(braces) {
  // Write code here
  let count = 0;
  for (let i = 0; i < braces.length; i++) {
    braces[i] === "(" ? count++ : count--;
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}

test("Valid cases", function() {
  equal(validSequence1(""), true, "empty string validates");
  equal(validSequence1("()"), true, "valid case");
  equal(validSequence1("()()"), true, "valid case");
  equal(validSequence1("(())"), true, "valid case");
  equal(validSequence1("(()())"), true, "valid case");
});

test("Invalid cases", function() {
  equal(validSequence1(")"), false, "invalid case");
  equal(validSequence1("("), false, "invalid case");
  equal(validSequence1(")("), false, "invalid case");
  equal(validSequence1("(()"), false, "invalid case");
  equal(validSequence1("())"), false, "invalid case");
  equal(validSequence1("())()("), false, "invalid case");
});
