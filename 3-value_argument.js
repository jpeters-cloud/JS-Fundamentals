const { argv } = require('node:process');

const args = argv.slice(2);

if (args[0] === undefined) {
    console.log("No argument");
} else {
    args.forEach(arg => console.log(arg));
}