/**
 * @type {{war: string, team1: string, team1Size: string, team2: string, team2Size: string}[]}
 */
const arr = [
  {
    war: "Rákóczi szabadságharc",
    team1: "Kuruc",
    team1Size: "70.000",
    team2: "Labanc",
    team2Size: "60.000",
  },
  {
    war: "48-as szabadságharc",
    team1: "Osztrák császárság (+ Orosz birodalom)",
    team1Size: "170.000 (+ 200.000)",
    team2: "Magyar királyság",
    team2Size: "170.000",
  },
  {
    war: "I. világháború",
    team1: "Antant",
    team1Size: "43 millió",
    team2: "Központi hatalmak",
    team2Size: "25 millió",
  },
  {
    war: "Bosworthi csata",
    team1: "Angolok (York + Lancester)",
    team1Size: "15.000",
  },
];

const headingData = ["Harc megnevezése", "Szembenálló felek", "Haderő"];
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

let tr = document.createElement("tr");
let td = document.createElement("td");

table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(tr);
document.body.appendChild(table);

for (const item of headingData) {
  const th = document.createElement("th");
  th.innerText = item;
  tr.appendChild(th);
}

for (const item of arr) {
  tr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    td = document.createElement("td");
    td.innerText = item;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
