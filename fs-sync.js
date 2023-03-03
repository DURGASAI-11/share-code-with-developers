const { readFileSync, writeFileSync, read } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-write-sync.txt",
  `Here is the final write file using already existed files:${first} ,${second}`
);

console.log("done with this task");
console.log("starting the next one");
