module("Shopping cart");

/*
Write a function that calculates total value of goods in a shopping cart,
taking discounts into account.

goods in an array of objects like { name: 'Milk', value: 10, amount: 2 }
discounts is an array of objects like { name: 'Milk', discount: '10%' }
*/

function totalCost(goods, discounts) {
  // Write your code here
  return goods.reduce((acc, el) => {
    let discountObj = discounts.find(item => item.name === el.name);
    if (discountObj) {
      let discount = parseInt(discountObj.discount) / 100;
      return (acc += (el.value - el.value * discount) * el.amount);
    }
    if (!discountObj) {
      return (acc += el.value * el.amount);
    }
    if (discounts.length === 0) {
      return (acc += el.value * el.amount);
    }
  }, 0);
}

test("Shopping cart", function() {
  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 2 }
      ],
      []
    ),
    130,
    "Without discounts, simple case"
  );
  // 10 + 20 + 50 * 2 = 130

  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 2 },
        { name: "Milk", value: 10, amount: 5 }
      ],
      []
    ),
    180,
    "Without discounts, repeated names"
  );
  // 10 + 20 + 50 * 2 + 10 * 5 = 180

  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 1 }
      ],
      [{ name: "Vegetables", discount: "50%" }]
    ),
    70,
    "With discounts, simple case"
  );
  // 10 + 10 + 50 = 70

  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 1 },
        { name: "Salt", value: 5, amount: 3 },
        { name: "Milk", value: 10, amount: 5 }
      ],
      [
        { name: "Vegetables", discount: "50%" },
        { name: "Milk", discount: "10%" }
      ]
    ),
    129,
    "With discounts, repeated names"
  );
  // 9 + 10 + 50 + 5 * 3 + 9 * 5 = 129
});
