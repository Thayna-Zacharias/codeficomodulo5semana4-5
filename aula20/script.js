const btnClick = document.getElementById('btnClick');
btnClick.onclick = function(){
    alert('Fui clicado!');
}
const inputText = document.getElementById('inputText');
inputText.onchange = function(){
    inputText.style.color = 'red';
}
inputText.oninput = function(){
    inputText.style.color = 'blue'; 
}
const outputMessage = document.getElementById('outputMessage');
inputText.onkeydown = function(){
    outputMessage.innerHTML += ' evento: onkeydown';
}
inputText.onkeypress = function(){
    outputMessage.innerHTML += ' evento: onkeypress';
}
inputText.onkeyup = function(){
    outputMessage.innerHTML += ' evento: onkeyup';
}
const box = document.getElementById('box');
box.onmouseover = function(){
    box.style.backgroundColor = 'purple';
}
box.onmouseout = function(){
    box.style.backgroundColor = '#00c8a8';
}
box.ondragstart = function(event) {
    event.dataTransfer.setData('text/plain', 'Arrastando "box"');
    box.classList.add('dragging');
};

box.ondragover = function(event) {
    event.preventDefault();
};

box.ondrop = function(event) {
    event.preventDefault();
    
    const data = event.dataTransfer.getData('text/plain');
    
    console.log('Dados arrastados:', data);

    box.classList.remove('dragging');
};
window.onload = function(){
    alert('window.onload')
}