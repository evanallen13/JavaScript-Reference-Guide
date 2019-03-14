
function addFunction (x,y){
	return x + y
}

let x = Number(prompt('Enter Number: '))
let y = Number(prompt('Enter Second Number: '))

alert(addFunction(x,y))
let name = 'Evan'
alert(`${name}`)


/* You can also define a function result as a Const */

const square = function(x) {
	return x * x
}

// Global vs. Local Scope 
let Global = 545

let globalToLocal = function(Global){
	let Local = Global / 2
	return Local
}