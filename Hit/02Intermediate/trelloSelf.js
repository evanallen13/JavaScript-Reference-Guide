let myTodo = {
    day: 'Monday',
    meeting: 0,
    finished: 0,
}

let addTodo = function(todo, meeting=0) {
    todo.meeting = todo.meeting + meeting
}

let finTodo = function(todo, finished=0 ){
    todo.finished = todo.finished + finished
    todo.meeting = todo.meeting - finished
}

addTodo(myTodo,5)
addTodo(myTodo,2)
finTodo(myTodo,3)

console.log(myTodo)