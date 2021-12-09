const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById('page-title').innerText = 'Into the Wild';
document.getElementById('paragraph').innerText = 'Parágrafos colorido';
document.getElementById('subtitle').innerText = 'Subtítulo também não escapou';

let classIgual = document.getElementsByClassName('igual');
classIgual[0].style.color = 'green';

const corSubTitulo = document.getElementsByTagName('h4');
corSubTitulo[0].style.color = 'blue';