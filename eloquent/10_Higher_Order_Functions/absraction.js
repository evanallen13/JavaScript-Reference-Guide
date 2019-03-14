
// Action becomes console.log
function repeat(n, action){
    for (let i = 0; i < n; i++){
        action(i)
    }
}

repeat(4, console.log)


// Insert a Arrow Function that pushes the result to labels
let labels = []

repeat (5, i=> {labels.push(`Unit ${i + 1}`)})

console.log(labels)