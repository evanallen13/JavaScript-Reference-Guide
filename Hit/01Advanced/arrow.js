'use strict'
// OG function 
const sayHello = function(name){
    return 'Hello there, '+ name +('!');
}
// console.log(sayHello('Evan'));

//Arrow Functions
const sayHello2 = (name) => {
    return `Hello there, ${name}!`
}
// console.log(sayHello2('Jaime'));

// Arrow function in 1 line
const sayHello3 = (name) => `Hello there, ${name}!`
// console.log(sayHello3('Allie'))

const todos = [{
    title: 'Buy Bread',
    isDone: true,
}, {
    title: 'Go to gym',
    isDone: true,
}, {
    title: 'Record YouTube video',
    isDone: false
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone)
const cameras = {
    price: 600,
    weight: 2000,
    myDesc: function(){
        return `This is a canon camera of $${this.price}`
    }
}
console.log(cameras.myDesc())
