'use strict'
let changeColor = function(obj){
    obj.style.color = 'Peru'
};

function changeBackgroundColor() {
    console.log('Hello');
    document.querySelector('body').style.background = 'MediumOrchid';
}

function removeLetterFromH1(){
    let h1 = document.querySelector('h1');
    h1.textContent = h1.textContent.slice(0,-1);
}

function m0ver(obj){
    obj.innerHTML = 'Go Away';
}

function m0ut(obj){
    obj.innerHTML = 'Thanks'
}