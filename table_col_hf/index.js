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

for (let i = 0; i < 3; i++) {
  tr.appendChild(th);
  th = document.createElement("th");
}
table.appendChild(tbody);

for (let i = 0; i < 4; i++) {
  tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (let k = 0; k < 4; k++) {
    tr.appendChild(td);
    td = document.createElement("td");
  }
}
