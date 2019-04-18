module("Braces");

/*
Write a function that validates a series of braces.
*/

function validSequence(braces) {
  // Write code here
  const brackets = {
    "[": "]",
    "{": "}",
    "<": ">",
    "(": ")"
  };
  const stack = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] in brackets) {
      stack.push(braces[i]);
    }

    if (Object.values(brackets).find(el => el === braces[i])) {
      let ind = Object.values(brackets).findIndex(el => el === braces[i]);
      let altOpened = Object.keys(brackets)[ind];
      //   Check if last el in stack is opened bracket and matches to current closed
      if (stack[stack.length - 1] === altOpened) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

test("Simple valid cases", function() {
  equal(validSequence(""), true, "empty string validates");
  equal(validSequence("[]"), true, "square braces");
  equal(validSequence("()"), true, "round braces");
  equal(validSequence("{}"), true, "figure braces");
  equal(validSequence("<>"), true, "brackets");
});

test("Simple invalid cases", function() {
  equal(validSequence("}"), false, "invalid case");
  equal(validSequence("({"), false, "invalid case");
  equal(validSequence("[<]"), false, "invalid case");
  equal(validSequence("({)}"), false, "invalid case");
});

test("Final cases", function() {
  equal(validSequence("([](<{}>))"), true, "valid case");
  equal(validSequence("({[](<{}>}))"), false, "invalid case");
});
