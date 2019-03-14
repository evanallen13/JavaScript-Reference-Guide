'use strict'
const todo = [
    {
        title: 'Go to Gym',
        isDone: true
    },
    {
        title: 'Buy Bread',
        isDone: true
    },
    {
        title: 'Do Hw',
        isDone: false
    }
]

const notDone = todo.filter((todo) => todo.isDone === false)
notDone.forEach(element => {
    console.log(element.title)
});