let object1 = {value: 10}
let object2 = object1
let object3 = {value: 10}

// console.log(object1 == object2)
// console.log(object1 == object3)

// Assign object1 value to 15 also changes object2
object1.value = 15
// object1.value EQUALS object2.value
// console.log(object1 == object2)

// console.log(object2.value)
// console.log(object3.value)


// Practice this concept 
let toDo = {
    day: 'Monday',
    meetings: 4,
    meetingsDone: 2,
}
let toDo2 = {
    day: 'Tuesday',
    meetings: 3,
    meetingsDone: 3
}

let toDo3 = toDo

console.log(toDo3)

toDo.day = 'Wednesday'

console.log(toDo3)

