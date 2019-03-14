let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo, meet=0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meet=0){
    todo.meetDone = todo.meetDone + meet 
}

let resetDate = function(todo){
    todo.meetings = 0
    todo.meetdone = 0
}

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone
    if (meetLeft > 1){
        return `You have ${meetLeft} meetings left today.`
    }else{
        return `You have ${meetLeft} meeting left today.`
    }
}

addMeeting(myTodos,4)
addMeeting(myTodos,2)
meetDone(myTodos,3)

console.log(getSummaryOfDay(myTodos))
