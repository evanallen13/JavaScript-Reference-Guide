var john = {
    name: 'I am John',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am Marry',
    age: 23,
    isActive: true
}

var sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false
}

let users = new Map()

users.set('john',john);
users.set('marry',marry);
users.set('sam',sam);

// for (const key of users.values()) {
//     console.log(key)
// }
// for (const [key, values] of users.entries()) {
//     console.log(key+values.name)
// }

// users.forEach((value,key) => {
//     console.log(key+' = '+value.name)
// });

var arrArr = [['one',1],['two',2],['three',3]]

var newMap = new Map(arrArr)

newMap.forEach(element => {
    console.log(element)
});