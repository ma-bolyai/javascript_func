/**
 * @typedef {{nationality: string, name: string, title: string, name2: string, title2: string}} CountryWriters
 */

/**
 *  @type {CountryWriters[]}
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

/**
 * @type {{headers: string}[]}
 */
const headers = ["Nemzetiség", "Szerző", "Mű"];

const table = document.createElement("table");
document.body.appendChild(table);

renderTableHead(table, headers);

renderTableBody(table, arr);

renderTableRow(table, arr);
