'use strict'
let Btn = document.getElementById('myBtn');
let div = document.getElementById('div');
let output = document.getElementById('output');

let showMes = function(e){
    output.textContent = (`Its ${e.target}`)
};

Btn.addEventListener('click', showMes);


let linkFunc = (e) => e.stop


