"use strict";

const RIVERS = [
  { назва: "Дніпро", впадає: "Чорне море", довжина: 2201 },
  { назва: "Дністер", впадає: "Чорне море", довжина: 1362 },
  { назва: "Південний Буг", впадає: "Чорне море", довжина: 806 },
  { назва: "Сіверський Донець", впадає: "Дон", довжина: 1053 },
  { назва: "Горинь", впадає: "Прип'ять", довжина: 659 }
];
function buildTable(data) {
  let table = `<thead><tr>`;

  //   Finding titles
  const tableTitles = Object.keys(data[0]);

  //   Adding titles to the table-string
  tableTitles.forEach(title => {
    table += `<th>${title}</th>`;
  });
  table += `</tr></thead><tbody>`;

  //   Adding values to the table-string
  data.forEach(river => {
    table += `<tr>`;
    for (let key in river) {
      table += `<td>${river[key]}</td>`;
    }
    table += `</tr>`;
  });
  table += `</tbody>`;

  //   Creating DOM Node
  const tableNode = document.createElement("table");
  tableNode.classList.add("table-1");
  tableNode.innerHTML = table;
  return tableNode;
}

document.body.appendChild(buildTable(RIVERS));

function textRight(table) {
  const rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    rows[i].cells[2].style.textAlign = "right";
  }
}
textRight(document.querySelector(".table-1"));
