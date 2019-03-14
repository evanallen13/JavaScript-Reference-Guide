let sayHello = function (name){
    console.log(`Hello, ${name}`)
}

let fullNameMaker = function(firstName, lastName){
    console.log('Welcome to LCO')
    console.log(`Happy to have you, ${firstName} ${lastName}`)
}


//fullNameMaker('Evan','Allen')

let myAdder = function (num1,num2){
    return num1 + num2
}

//console.log(myAdder(2,3))

let myMultiplier = function (x,y){
    return x * y
}

let guestUser = function(name = 'unnamed', courseCount = 0) {
    return 'Hello, ' + name +' your course count is '+ courseCount
}

console.log(guestUser('Evan',6))
