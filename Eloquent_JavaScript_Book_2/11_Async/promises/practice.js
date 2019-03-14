
var p = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('This is async!!')
    },1000)
    if (good_condition){
        resolve('Success!');
    }else {
        reject('Fail!');
    }
});

p.then(function(){
    console.log('This is after');
}).catch(function(){
    console.log('This is the catch');
});

console.log('THis is the last');