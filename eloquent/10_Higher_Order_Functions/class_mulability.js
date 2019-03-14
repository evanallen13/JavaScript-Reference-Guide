
// let anObject = {left: true, right: false}

// let o1 = [1,2,3]
// let o2 = [3,4,5]
// let o3 = o1

// o3.push(4)

// console.log(o3)

// o1.push(5)

// console.log(o3)

// let o4 = {o1,o2}
// let o5 = {...o1,...o2}
// console.log(o4)
// console.log(o5)

// o1.push(6)

// console.log(o4)

function max(x,...numbers){
    console.log(`The first arg is ${x}`)
    let result = -Infinity;
    for (let number of numbers){
        if(number > result)result = number;
    }
    return result
}

console.log(max(5,2,3,5,6,45))