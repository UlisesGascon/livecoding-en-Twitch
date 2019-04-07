const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

(async function (){
    const data = await read('./notas.md')
    console.log(data.toString());    
})()

/*
fs.readFile('./notas.md', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
*/ 

/*
const data = fs.readFileSync('./notas.md')
console.log(data.toString());
*/