/**
 * @type {{author: string, age: string, lover1: string, lover2: string}[]}
 */
const arr = [
  {
    author: "Balassi Bálint",
    age: "reformáció",
    lover1: "Losonczy Anna",
    lover2: "Dobó Krisztina",
  },
  {
    author: "Csokonai Vitéz Mihály",
    age: "felvilágosodás",
    lover1: "Vajda Juliána",
  },
  {
    author: "Petőfi Sándor",
    age: "magyar romantika",
    lover1: "Mednyánszky Berta",
    lover2: "Szendrey Júlia",
  },
  {
    author: "Ady Endre",
    age: "20. század",
    lover1: "Léda",
    lover2: "Csinszka",
  },
];

/**
 * @type {string[]}
 */
const header = ["Szerző neve", "Korszak", "Szerelmek"];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

for (const item of header) {
  const th = document.createElement("th");
  th.innerText = item;
  if (header.indexOf(item) === header.indexOf(header.at(-1))) {
    th.colSpan = 2;
  }
  thead.appendChild(th);
}

for (const data of arr) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (const key in data) {
    const td = document.createElement("td");
    td.innerText = data[key];
    if (data[key] == "Vajda Juliána") {
      td.colSpan = 2;
    }
    tr.appendChild(td);
  }
}

/**
 * inserts a new cell into an existing table with the specified data
 * @param {string} cellType either th or td
 * @param {string} cellContent desired content of the cell
 * @param {HTMLTableRowElement} parentRow specific row of the table
 * @returns {HTMLTableCellElement}
 */
function createCell(cellType, cellContent, parentRow) {}
