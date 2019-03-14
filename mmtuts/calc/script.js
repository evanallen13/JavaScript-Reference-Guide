function calc() {
    let a = parseInt(document.querySelector('#Value1').value);
    let b = parseInt(document.querySelector('#Value2').value);
    let op= document.querySelector('#Operator').value;
    let calculate;

    if(op === 'Add'){
        calculate = a + b
    }else if(op ==='Minus'){
        calculate = a - b
    }else if(op ==='Multi'){
        calculate = a * b
    }else if(op ==='Div'){
        calculate = a / b
    }
    document.querySelector('#results').innerHTML = calculate
};
