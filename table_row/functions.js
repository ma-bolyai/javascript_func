// TODO: finish

/**
 * @param {HTMLTableElement} table
 * @param {string[]} array
 */
function renderTableHead(table, array) {
  const thead = document.createElement("thead");
  table.appendChild(thead);

  const tr = document.createElement("tr");
  thead.appendChild(tr);

  for (const item of array) {
    // const th = document.createElement("th");
    // tr.appendChild(th);
    // th.innerText = item;
    createCell("th", item, tr);
  }
}

/**
 * @param {HTMLTableElement} table
 * @param {CountryWriters[]} array
 */
function renderTableBody(table, array) {
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  htmlEventListener("submit");
}

/**
 * @param {HTMLTableElement} table
 * @param {CountryWriters[]} array
 */
function renderTableRow(table, array) {
  const tbody = table.querySelector("tbody");

  for (const item of array) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // const td_nat = document.createElement("td");
    // tr.appendChild(td_nat);
    const tdNat = createCell("td", item.nationality, tr);

    // const td_name = document.createElement("td");
    // tr.appendChild(td_name);
    createCell("td", item.name, tr);

    // const td_title = document.createElement("td");
    // tr.appendChild(td_title);
    createCell("td", item.title, tr);

    // td_nat.innerText = item.nationality;
    // td_name.innerText = item.name;
    // td_title.innerText = item.title;

    // fixed a typo and it works, im an idiot

    if (item.name && item.title2) {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);

      //   const td_name2 = document.createElement("td");
      //   tr.appendChild(td_name2);
      createCell("td", item.name2, tr);

      //   const td_title2 = document.createElement("td");
      //   tr.appendChild(td_title2);
      createCell("td", item.title2, tr);

      tdNat.rowSpan = 2;
    }
  }
}

/**
 * @param {string} cellType either th or td
 * @param {string} cellContent desired content of the cell
 * @param {HTMLTableRowElement} parentRow specific row of the table
 * @returns {HTMLTableCellElement}
 */

function createCell(cellType, cellContent, parentRow) {
  const cell = document.createElement(cellType);
  cell.innerText = cellContent;
  parentRow.appendChild(cell);

  return cell;
}

/**
 * @param {Event} event
 */
function htmlEventListener(event) {
  /**
   * @type {HTMLFormElement}
   */
  const form = document.getElementById("htmlform");

  form.addEventListener(event, (e) => {
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

    const tbody = table.querySelector("tbody");

    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // const td_nat = document.createElement("td");
    // tr.appendChild(td_nat);
    const tdNat = createCell("td", values.nationality, tr);

    tdNat.addEventListener("click", (e) => {
      /**
       * @type {HTMLTableCellElement}
       */
      const target = e.target;
      target.classList.add("marked");
    });

    // const td_name = document.createElement("td");
    // tr.appendChild(td_name);
    createCell("td", values.name, tr);

    // const td_title = document.createElement("td");
    // tr.appendChild(td_title);
    createCell("td", values.title, tr);

    // shitty rowspan cells

    if (values.name && values.title2) {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);

      //   const td_name2 = document.createElement("td");
      //   tr.appendChild(td_name2);
      createCell("td", values.name2, tr);

      //   const td_title2 = document.createElement("td");
      //   tr.appendChild(td_title2);
      createCell("td", values.title2, tr);

      tdNat.rowSpan = 2;
    }
  });
}
