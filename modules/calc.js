const Calc = require("calc-js").Calc;

function getCalculate() {}

// console.log(process.argv);

// const a = process.argv[2];
// const b = process.argv[3];

const [, , a, b] = process.argv;

console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

module.exports = getCalculate;
