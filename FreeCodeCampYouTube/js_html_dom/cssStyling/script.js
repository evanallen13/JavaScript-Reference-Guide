'use strict'
var line = document.getElementById('line');
var attribute = document.getElementById('attribute');

line.style.background = 'red';

line.style.ccsText = "color: blue; border: 1px solid black";

attribute.setAttribute("style", "color:red; border: 1px solid blue;");

console.log(window.getComputedStyle(line));