const { argv } = require('node:process');

function factorial(n) {
    if (isNaN(n) || n < 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const input = parseInt(argv[2]);
console.log(factorial(input));
