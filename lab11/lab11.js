// task 1
// let x = 0.5;

// let result =
//   x /
//   (Math.pow(x, 3) + 0.1 / (Math.pow(x, 3) + 0.01 / (Math.pow(x, 3) + 0.001)));
// console.log(result);

// task 2

// let a = 5;
// let b = 0;
// let c = 100;

// function medium(a,b,c) {
//     if(a > b && a < c || a > c && a < b) return a;
//     if(b > a && b < c || b > c && b < a) return b;
//     return c;
// }

// // task 3
// let n = prompt("number", "");
// for (let i = 0; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write("#");
//   }
//   document.write("<br/>");
// }

// task 4

let n = prompt("number?", "");
for (let i = n; i >= 1; i--) {
  for (j = 1; j < i; j++) {
    document.write("&nbsp;&nbsp;");
  }

  for (let k = n; k > i - 1; k--) {
    document.write("#");
  }

  document.write("&nbsp;&nbsp;");

  for (let k = n; k > i - 1; k--) {
    document.write("#");
  }
  document.write("<br/>");
}

// TASK 5

function amountOfCoins(amount) {
  const coins = [25, 10, 5, 1];
  let updatedNum = amount * 100;
  let result25 = 0;
  let result10 = 0;
  let result5 = 0;
  let result1 = 0;
  while (updatedNum) {
    while (updatedNum >= coins[0]) {
      result25++;
      updatedNum -= coins[0];
    }
    while (updatedNum >= coins[1]) {
      result10++;
      updatedNum -= coins[1];
    }
    while (updatedNum >= coins[2]) {
      result5++;
      updatedNum -= coins[2];
    }
    while (updatedNum >= coins[3]) {
      result1++;
      updatedNum -= coins[3];
    }
    document.body.innerHTML = `
        <h1>Количество монет:</h1>
        <p>25&cent; - ${result25} шт</p>
        <p>10&cent; - ${result10} шт</p>
        <p>5&cent; - ${result5} шт</p>
        <p>1&cent; - ${result1} шт</p>
        <h3>Наименьшее количество монет:</h3>
        <p>${result25 + result10 + result5 + result1} шт</p>
      `;
  }
}

amountOfCoins(prompt("Введите количество сдачи", ""));
