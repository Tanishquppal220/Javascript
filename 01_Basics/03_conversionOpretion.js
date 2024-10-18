let score = "34abc";
console.log(typeof(score),score);
let num = Number(score);
console.log(typeof(num),num);

/* Be carefull while converting to numbers */
//! alphanumeric string =>NaN
// numaric string => number
// boolean => 1/0
// null => 0
// undefined => NaN

let some=NaN;
let isboolsome=Boolean(some);
console.log(typeof(isboolsome),isboolsome);

