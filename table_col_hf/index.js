/**
 * @type {{theme: string, time: string, scientist1: string, scientist2:string}[]}
 */
const arr = [
  {
    theme: "Optika",
    time: "XI. szazad",
    scientist1: "Alhazen",
  },
  {
    theme: "Asztronómia",
    time: "reneszánsz",
    scientist1: "Kepler",
    scientist2: "Galilei",
  },
  {
    theme: "Kvantumfizika",
    time: "XIX-XX. század",
    scientist1: "Max Planck",
    scientist2: "Albert Einstein",
  },
  {
    theme: "Modern fizika",
    time: "XX-XXI. század",
    scientist1: "Richard Feynman",
    scientist2: "Stephen Hawking",
  },
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

let th = document.createElement("th");
let tr = document.createElement("tr");
let td = document.createElement("td");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);

const headingData = ["Fizika területe", "Időszak", "Képviselők"];
const tableData = [
  ["Optika", "XI. század", "Alhazen"],
  ["Asztronómia", "reneszánsz", "Kepler", "Galilei"],
  ["Kvantumfizika", "XIX-XX. század", "Max Planck", "Albert Einstein"],
  ["Modern fizika", "XX-XXI. század", "Richard Feynman", "Stephen Hawking"],
];

for (let i = 0; i < 3; i++) {
  tr.appendChild(th);
  th.innerText = headingData[i];
  if (i == 2) {
    th.colSpan = 2;
  }
  th = document.createElement("th");
}
table.appendChild(tbody);

for (let i = 0; i < 4; i++) {
  tr = document.createElement("tr");
  tbody.appendChild(tr);
  if (i == 0) {
    for (let k = 0; k < 3; k++) {
      tr.appendChild(td);
      td.innerText = tableData[i][k];
      if (k == 2) {
        td.colSpan = 2;
      }
      td = document.createElement("td");
    }
  } else {
    for (let k = 0; k < 4; k++) {
      tr.appendChild(td);
      td.innerText = tableData[i][k];
      td = document.createElement("td");
    }
  }
}
