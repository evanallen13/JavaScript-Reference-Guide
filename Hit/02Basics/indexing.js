const numbers = ['One','Two','Three','Four','Five','Six']

//start
numbers.shift()//Deletes the first index from array
console.log(numbers)

numbers.unshift('Zero')//Inserts to the first index 
console.log(numbers)
//end
numbers.pop() //removes the last index from array
console.log(numbers)

numbers.push('Seven') // Adds to the last index
console.log(numbers)

//middle
numbers.splice(2,1,'Something')
console.log(numbers)