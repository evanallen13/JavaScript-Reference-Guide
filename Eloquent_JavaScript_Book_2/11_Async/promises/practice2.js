var promiseCount = 0;

function testPromise(){
    var thisPromiseCount = ++promiseCount;
    console.log(thisPromiseCount + ': Started - sync code started.');

    var p1 = new Promise(function(resolve, reject){
        console.log(thisPromiseCount + ": Promise started - Async code started.");
        setTimeout(
            function(){
                resolve(thisPromiseCount);
            }, Math.random() * 2000 + 1000);
        });

        p1.then(function(val) {
            console.log(val + ': Promise fulfilled - Async terminated!');
        }).catch(function(reason){
            console.log('Handle rejected promise ('+reason+') here.');
        });
        console.log(thisPromiseCount + ': Promises made - Synce code terminated');
    }
testPromise();
testPromise();
testPromise();