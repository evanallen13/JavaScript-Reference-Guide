'use strict'
const convertToRs = (dollar) => {
    if(typeof(dollar) === 'number'){
        return dollar * 64
    }else{
        throw Error('Amount is not a number.')
    }
}

try {
    const myValue = convertToRs('5');
    console.log(myValue)
} catch (error) {
    console.log(error.message)
}

