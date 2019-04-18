const phoneBook = {}; // Тут ви зберігаєте записи як хочете

/*
   Функція додавання запису в телефонну книгу.
*/
phoneBook.add = function(name, phone, email) {
  document.addEventListener("DOMContentLoaded", () => {
    if ("people" in phoneBook) {
      phoneBook.people.push({ name, phone, email });
    } else {
      phoneBook.people = [];
      phoneBook.people.push({ name, phone, email });
    }
  });
};

/*
   Функція пошуку записів в телефонній книзі.
   Пошук ведеться по всім полям.
*/
phoneBook.find = function(query) {
  document.addEventListener("DOMContentLoaded", () => {
    let rows = "";
    if ("people" in phoneBook) {
      let queryArr = phoneBook.people.filter(person => {
        for (let prop in person) {
          if (person[prop].includes(query)) {
            return true;
          }
        }
        return false;
      });
      queryArr.forEach(el => {
        rows += `<p>${el.name}, ${el.phone}, ${el.email}</p>`;
      });

      let div = document.createElement("div");
      div.innerHTML = rows;
      document.body.appendChild(div);
    } else {
      let div = document.createElement("div");
      div.innerHTML = `"Телефонная книга пуста"`;
      document.body.appendChild(div);
    }
  });
};

/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function(query) {
  document.addEventListener("DOMContentLoaded", () => {
    if ("people" in phoneBook) {
      let deleted = phoneBook.people.reduce((acc, person) => {
        for (let prop in person) {
          if (person[prop] === query) {
            return acc + 1;
          }
        }
        return acc;
      }, 0);

      const newPeople = phoneBook.people.filter(person => {
        for (let prop in person) {
          if (person[prop] === query) {
            return false;
          }
        }
        return true;
      });

      phoneBook.people = newPeople;

      let p = document.createElement("p");
      p.innerHTML = `<p>Удаленных контактов: ${deleted}</p>`;
      document.body.appendChild(p);
    }
  });
};

/*
   Функція виведення всіх телефонів.
*/

phoneBook.showTable = function() {
  document.addEventListener("DOMContentLoaded", () => {
    let table = `<table class="table"><thead><tr><th>Имя</th><th>Телефон</th><th>Email</th></tr></thead>`;
    if ("people" in phoneBook) {
      table += `<tbody>`;
      phoneBook.people.forEach(el => {
        table += `<tr><td>${el.name}</td><td>${el.phone}</td><td>${
          el.email
        }</td></tr>`;
      });
      table += `</tbody></table>`;
      let div = document.createElement("div");
      div.innerHTML = table;
      document.body.appendChild(div);
    }
  });
};
