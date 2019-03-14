let changeColor = function(element){
    element.style.color = 'peru'
};

document.querySelector("#myBtn").onclick = changeBackground;

function changeBackground(){
    document.querySelector('body').style.background = 'MediumOrchid';
}

function removeLetters(){
    let h1 = document.querySelector('h1');
    h1.textContent = h1.textContent.slice(0,-1);
}

function m0ver(element){
    element.innerHTML = "Move"
}
function m0ut(element){
    element.innerHTML = 'Thanks'
    setTimeout( function back() {element.innerHTML = 'Mouse over me'}, 2000);
}