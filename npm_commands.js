//npm -global command comes with node
//npm --version

//local dependency -use it only in this particular project
//npm i <packageName>

//global dependency -use it in any project
//npm install -g <packageName>
// sudo install -g <packageName> (mac)

//package.json -manifest file (stores important info aabout project /packages)
//manual approach (creat package.json in that root , create properties etcc)
//npm init (step by step ,press enter to skip )
//npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
// const flattened = items.flat(1);
//const flattened =items.flat(Infinity)
// console.log(flattened); the basic js natural way to flatten

// using lodash module
const flatten = _.flattenDeep(items);
console.log(flatten);
