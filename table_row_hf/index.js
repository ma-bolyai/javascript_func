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

/**
 * @type {string[]}
 */
const heading = ["Harc megnevezése", "Szembenálló felek", "Haderő"];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

for (item of heading) {
  const th = document.createElement("th");
  th.innerText = item;
  thead.appendChild(th);
}

for (item of arr) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (key in item) {
    const td = document.createElement("td");
    td.innerText = item[key];
    console.log(key);
    if (key == "war") {
      td.rowSpan = 2;
    }
    tr.appendChild(td);
  }
}
