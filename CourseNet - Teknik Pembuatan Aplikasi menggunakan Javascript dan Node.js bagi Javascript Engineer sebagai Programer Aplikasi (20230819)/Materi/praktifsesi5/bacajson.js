const fs = require('fs');
let data = fs.readFileSync('./data.json');
let parsedata = JSON.parse(data);
console.log(parsedata);