const obj = {};
let n = 4;

if (n > 5) {
  obj.name = "string1";
  console.log(obj);
} else {
  obj["name"] = "string2";
  console.log(
    obj["name"],
    obj.age,
    5 == "5", // true
    5 === "5", // false
    null == undefined, // true
    null === undefined // false
  );
}
