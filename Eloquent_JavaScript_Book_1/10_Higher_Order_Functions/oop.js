
let p = {speak(line){ console.log(`${this.type} speaks ${line}`)}}


let killer = Object.create(p)

killer.type = 'king'
killer.speak('Hello')
