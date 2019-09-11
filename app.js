let robMass = 78;
let robHeight = 1.69;
const robBMI = (robMass / (robHeight * robHeight)) ;
/* console.log (robBMI); */

let dejMass = 92;
let dejHeight = 1.95;
const dejBMI = ( dejMass / (dejHeight * dejHeight));
/* console.log (dejBMI); */ 

const compareBMI = dejBMI <= robBMI ;
/* console.log(compareBMI); */

let statement = 'Does Rob have a higher BMI than Dejon?' + compareBMI;
console.log(statement);