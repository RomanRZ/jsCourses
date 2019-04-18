// Bubble
//Disordered arrays generator
function genDisorderedArr(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 501);
  }
  console.log(arr);
  return arr;
}

// // Ordered arrays generator
function genOrderedArr(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = i;
  }
  console.log(arr);
  return arr;
}

//   Reversed arrays generator
function genReversedArr(length) {
  const arr = [];
  for (let i = 0, j = length; i < length; i++, j--) {
    arr[i] = j;
  }
  console.log(arr);
  return arr;
}

function bubbleSort(arr) {
  let entryTime = new Date();
  let steps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
        steps++;
      }
    }
  }
  console.log(`${((new Date() - entryTime) / 1000).toFixed(2)} seconds`);
  console.log(`Steps: ${steps}`);
  console.log(arr);
  return arr;
}

function SelectionSort(arr) {
  let entryTime = new Date();
  let steps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        steps++;
      }
    }
    let t = arr[min];
    arr[min] = arr[i];
    arr[i] = t;
  }
  console.log(`${((new Date() - entryTime) / 1000).toFixed(2)} seconds`);
  console.log(`Steps: ${steps}`);
  console.log(arr);
  return arr; // На выходе сортированный по возрастанию массив A.
}

function InsertionSort(arr) {
  let entryTime = new Date();
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    let v = arr[i],
      j = i - 1;
    while (j >= 0 && arr[j] > v) {
      arr[j + 1] = arr[j];
      j--;
      steps++;
    }
    arr[j + 1] = v;
  }
  console.log(`${((new Date() - entryTime) / 1000).toFixed(2)} seconds`);
  console.log(`Steps: ${steps}`);
  console.log(arr);
  return arr; // На выходе сортированный по возрастанию массив A.
}

function ShellSort(arr) {
  let entryTime = new Date();
  let steps = 0;
  let i = Math.floor(arr.length / 2);
  while (i > 0) {
    for (let j = 0; j < arr.length; j++) {
      let k = j,
        t = arr[j];
      while (k >= i && arr[k - i] > t) {
        arr[k] = arr[k - i];
        k -= i;
        steps++;
      }
      arr[k] = t;
    }
    i = i == 2 ? 1 : Math.floor((i * 5) / 11);
  }
  console.log(`${((new Date() - entryTime) / 1000).toFixed(2)} seconds`);
  console.log(`Steps: ${steps}`);
  console.log(arr);
  return arr;
}

function CombSort(arr) {
  let entryTime = new Date();
  let steps = 0;
  function newGap(gap) {
    gap /= 1.3;
    if (gap == 9 || gap == 10) gap = 11;
    if (gap < 1) return 1;
    return gap;
  }

  let gap = arr.length;
  do {
    swapped = false;
    gap = newGap(gap);
    for (let i = 0; i < arr.length - gap; ++i) {
      if (arr[i] > arr[i + gap]) {
        swapped = true;
        let t = arr[i + gap];
        arr[i + gap] = arr[i];
        arr[i] = t;
        steps++;
      }
    }
  } while (gap > 1 || swapped);
  console.log(`${((new Date() - entryTime) / 1000).toFixed(2)} seconds`);
  console.log(`Steps: ${steps}`);
  console.log(arr);
  return arr;
}

function QuickSort(arr) {
  let entryTime = new Date();
  let steps = 0;

  if (arr.length == 0) {
    return [];
  }
  let a = [],
    b = [],
    p = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) {
      a[a.length] = arr[i];
      steps++;
    } else {
      b[b.length] = arr[i];
      steps++;
    }
  }
  console.log(`${((new Date() - entryTime) / 1000).toFixed(2)} seconds`);
  console.log(`Steps: ${steps}`);
  console.log(arr);
  //   return QuickSort(a).concat(p, QuickSort(b));
}
let entryTime = new Date();
let steps = 0;
const arr = genOrderedArr(1024);
arr.sort((a, b) => {
  steps++;
  return a - b;
});
console.log(`${((new Date() - entryTime) / 1000).toFixed(2)} seconds`);
console.log(`Steps: ${steps}`);
console.log(arr);
// genDisorderedArr(1024).sort((a, b) => {
//   return a - b;
// });
// genOrderedArr(128).sort((a, b) => {
//   return a - b;
// });
// genOrderedArr(1024).sort((a, b) => {
//   return a - b;
// });
// genReversedArr(128).sort((a, b) => {
//   return a - b;
// });
// genReversedArr(1024).sort((a, b) => {
//   return a - b;
// });
