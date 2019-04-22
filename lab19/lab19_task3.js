class PhoneBook {
  add(name, phone, email) {
    if ("people" in phoneBook) {
      phoneBook.people.push({ name, phone, email });
    } else {
      phoneBook.people = [];
      phoneBook.people.push({ name, phone, email });
    }
    if (!localStorage.getItem("people")) {
      const people = [];
      people.push({ name, phone, email });
      localStorage.setItem("people", JSON.stringify(people));
    } else {
      const people = JSON.parse(localStorage.getItem("people"));
      people.push({ name, phone, email });
      localStorage.setItem("people", JSON.stringify(people));
    }
  }

  find(query) {
    let rows = "";
    const found = document.querySelector(".found");
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

      found.innerHTML = rows;
      if (found.innerHTML === "") {
        found.innerHTML = "Поиск не дал результатов";
      }
    } else {
      found.innerHTML = `Таблица пуста`;
    }
  }

  remove(query) {
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
      localStorage.setItem("people", JSON.stringify(newPeople));

      document.querySelector(
        ".removed"
      ).innerHTML = `<p>Удаленных контактов: ${deleted}</p>`;
    }
  }

  showTable() {
    let table = `<thead><tr><th>Имя</th><th>Телефон</th><th>Email</th></tr></thead>`;
    const people = JSON.parse(localStorage.getItem("people"));
    if (people) {
      table += `<tbody>`;
      people.forEach(el => {
        table += `<tr><td>${el.name}</td><td>${el.phone}</td><td>${
          el.email
        }</td></tr>`;
      });
      table += `</tbody>`;
      document.querySelector(".table").innerHTML = table;
    }
  }
}

const phoneBook = new PhoneBook();
document.addEventListener("DOMContentLoaded", () => {
  phoneBook.showTable();
  const people = JSON.parse(localStorage.getItem("people"));
  if (people) {
    phoneBook.people = [];
    people.forEach(person => {
      phoneBook.people.push(person);
    });
  }

  document.querySelector(".add-form").addEventListener("submit", e => {
    e.preventDefault();
    const personName = document.querySelector(".add-form__name");
    const personPhone = document.querySelector(".add-form__phone");
    const personeEmail = document.querySelector(".add-form__email");
    phoneBook.add(personName.value, personPhone.value, personeEmail.value);
    phoneBook.showTable();
    personName.value = "";
    personPhone.value = "";
    personeEmail.value = "";
  });
  document.querySelector(".remove-form").addEventListener("submit", e => {
    e.preventDefault();
    const removeRequest = document.querySelector(".remove-form__request");
    phoneBook.remove(removeRequest.value);
    phoneBook.showTable();
    removeRequest.value = "";
  });
  document.querySelector(".search-form").addEventListener("submit", e => {
    e.preventDefault();
    const searchRequest = document.querySelector(".search-form__request");
    phoneBook.find(searchRequest.value);
    searchRequest.value = "";
  });
});
