
//               dd-mm-yyyy hh:mm
let datetime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

//console.log(datetime.test())

let notBinary = /[^01]/;
// console.log(notBinary.test('1011210'))

let myName = /evan/i;
let notName = /[^evan]i/;
// console.log(myName.test('Hello,Evan'));
// console.log(notName.test('Hello Evan'));


console.log(/"\d+"/.test('"123"'));
let day = new Date();

console.log(day.getFullYear());
