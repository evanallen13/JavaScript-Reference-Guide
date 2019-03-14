
class dice{
    constructor(side=6){
        this.side = side
    }
    roll(){
        return Math.random(this.sides * Math.random() + 1)
    }
}

const d6 = new dice(6)

console.log(d6.roll())