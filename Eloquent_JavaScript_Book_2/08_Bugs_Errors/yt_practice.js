 /* Try, Catch, Finally, Throw */
'use strict'
 try {
     console.log('Start of try runs.');

     unicycle;

     console.log('End of try runs -- never reached');
} catch(err){
    console.log('An error has occured: '+ err);
}finally{
    console.log('This always runs');
}
console.log('Will this run?');

let json = '{"age": 30}';

try {
    let user = JSON.parse(json);
    if (!user.name){
        throw new SyntaxError('Incomplete data: no name');
    }
    console.log(user.name);

}catch(e){
    console.log("JSON Error"+ e.message);
}
