/*
let iamGlobal = 'someValue'

if (true) {
	let iamlocal = 'Hell'
	iamGlobal = 'shit'
}
console.log(iamlocal)
console.log(iamGlobal)
*/

// Kings Problem 

let king = 'John'

if (true) {
	let king = 'Sam'
	if (true) {
		let king = 'Ram'
		console.log(king)
	}
}
if (true) {
	console.log("I am second: " + king)
}
