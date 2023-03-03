//Global   - no window

// __dirname -path to current directory
// __filename -file name
// require  -functio to use modules (common js)
// module -info about current module (file)
//process - info about env whre the program is being executed (we can save some confedential data like passwords usernames etc...)

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("hello ");
}, 1000);
