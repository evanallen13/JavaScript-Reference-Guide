'use scrict'
function runInput(input, callback){
    setTimeout(
        () => callback(input),0
    );
}

console.log('A');
runInput('B',step2);

function step2(result2){
    console.log(result2);
    runInput('C',step3);
    console.log('D');
}

function step3(result3){
    console.log(result3);
}
console.log('E');