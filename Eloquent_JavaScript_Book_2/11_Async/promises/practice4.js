const promise = new Promise(function(resolve, result){
    setTimeout(() => resolve(1),2000);
})
promise.then(function(result){
    console.log(`Result 1: ${result}`);
    return result * 2;
}).then(function(result){
    console.log(`Result 2: ${result}`);
    return result * 2;
}).then(function(result){
    console.log(`Result 3: ${result}`);
    return result * 2;
})