/**
 *  @type {{nationality: string, name: string, title: string, name2: string, title2: string}[]}
 */
const arr = [
  {
    nationality: "Orosz",
    name: "Gogol",
    title: "A köpönyeg",
    name2: "Csehov",
    title2: "A csinovnyik halála",
  },
  {
    nationality: "Cseh",
    name: "Franz Kafka",
    title: "Az átváltozás",
  },
  {
    nationality: "Magyar",
    name: "Örkény István",
    title: "Egyperces Novellák",
    name2: "József Attila",
    title2: "Klárisok",
  },
  {
    nationality: "Svájc",
    name: "Friedrich Dürrenmatt",
    title: "A fizikusok",
  },
];

// TODO: finish

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

/**
 * @type {{headers: string}[]}
 */
const headers = ["Nemzetiseg", "Szerző", "Mű"];

const tr = document.createElement("tr");
thead.appendChild(tr);

for (const item of headers) {
  const th = document.createElement("th");
  tr.appendChild(th);
  th.innerText = item;
}

// problematic section begins

for (const item of arr) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  const td_nat = document.createElement("td");
  tr.appendChild(td_nat);

  td_nat.addEventListener("click", (e) => {
    /**
     * @type {HTMLTableCellElement}
     */
    const target = e.target;
    target.classList.add("marked");
  });

  const td_name = document.createElement("td");
  tr.appendChild(td_name);

  const td_title = document.createElement("td");
  tr.appendChild(td_title);

  td_nat.innerText = item.nationality;
  td_name.innerText = item.name;
  td_title.innerText = item.title;

  // fixed a typo and it works, im an idiot

  if (item.name && item.title2) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td_name2 = document.createElement("td");
    tr.appendChild(td_name2);

    const td_title2 = document.createElement("td");
    tr.appendChild(td_title2);

    td_name2.innerText = item.name2;
    td_title2.innerText = item.title2;

    td_nat.rowSpan = 2;
  }
}

// user input section

/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("htmlform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /**
   * @type {HTMLFormElement}
   */
  const target = e.target;

  /**
   * @type {{nationality: HTMLInputElement, name: HTMLInputElement, name2: HTMLInputElement, title: HTMLInputElement, title2: HTMLInputElement}}
   */
  const inputs = {
    nationality: target.querySelector("#nemzetiseg"),
    name: target.querySelector("#szerzo1"),
    name2: target.querySelector("#szerzo2"),
    title: target.querySelector("#mu1"),
    title2: target.querySelector("#mu2"),
  };

  const values = {
    nationality: inputs.nationality.value,
    name: inputs.name.value,
    name2: inputs.name2.value,
    title: inputs.title.value,
    title2: inputs.title2.value,
  };

  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  const td_nat = document.createElement("td");
  tr.appendChild(td_nat);

  td_nat.addEventListener("click", (e) => {
    /**
     * @type {HTMLTableCellElement}
     */
    const target = e.target;
    target.classList.add("marked");
  });

  const td_name = document.createElement("td");
  tr.appendChild(td_name);

  const td_title = document.createElement("td");
  tr.appendChild(td_title);

  td_nat.innerText = values.nationality;
  td_name.innerText = values.name;
  td_title.innerText = values.title;

  // shitty rowspan cells

  if (values.name && values.title2) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td_name2 = document.createElement("td");
    tr.appendChild(td_name2);

    const td_title2 = document.createElement("td");
    tr.appendChild(td_title2);

    td_name2.innerText = values.name2;
    td_title2.innerText = values.title2;

    td_nat.rowSpan = 2;
  }
});
