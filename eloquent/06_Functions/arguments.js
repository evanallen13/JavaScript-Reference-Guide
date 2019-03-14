// Can input more arguments than requested
function square(x){
    return (x * 2)
}
// Function will take the first arument 
console.log(square(3,'Evan'))

// If the argrument is Undefined it will return undefined
console.log(square())

// You can use IF statements to fix mistakes
function minus(a,b){
    if (b === undefined){
        return -a
    }else{
        return a - b 
    }
}
console.log(minus(2))
console.log(minus(3,2))

// You can add default parameter
function add(a,b=5){
    return a + b
}
console.log(add(2))