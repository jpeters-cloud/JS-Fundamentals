const { argv } = require('node:process');

const arg1 = argv[2];
const arg2 = argv[3];

console.log(`${arg1} is ${arg2}`);