var body = document.querySelector('body');
var button = document.querySelector('button');
var color = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor(e) {
    e.preventDefault();

    var letras = "0123456789ABCDEF";
    var colorChanger = '#';
    for (var i = 0; i < 6; i++)
    colorChanger += 
    letras[(Math.floor(Math.random() * 16))];

    color.innerText = colorChanger;
    body.style.backgroundColor = colorChanger;
}