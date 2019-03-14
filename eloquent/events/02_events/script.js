'use strict'
let btn = document.querySelector(".test-btn");
let form = document.querySelector(".test-form");

function firstFunction(e,name){
    e.preventDefault();
    btn.innerHTML = name;
}

btn.addEventListener("click", function(e) {
    firstFunction(e, "Evan");
});
btn.addEventListener("click", function() {
    btn.style.backgroundColor="blue"
});