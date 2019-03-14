let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(add=0) {
        this.meetings = this.meetings + add
    },
    finMeeting: function(add=0) {
        this.meetDone = this.meetDone + add
        this.addMeeting = this.addMeeting - add
    },
    summary: function() {
        console.log(`You had ${this.meetDone} today.`)
        console.log(`You have ${this.meetings} left today.`)
    },
    reset: function() {
         this.meetings = 0
         this.meetDone = 0
    }
}

console.log(myTodos.day)
myTodos.addMeeting(4)
myTodos.finMeeting(2)

myTodos.summary()

// Assignment 
// Handle meeting done
// create reset functions











