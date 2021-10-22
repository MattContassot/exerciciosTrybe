/*
*Acesse o elemento elementoOndeVoceEsta
*Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
*Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
*Acesse o primeiroFilho a partir de pai
*Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
*Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
*Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
*Agora acesse o terceiroFilho a partir de pai
*/

let corPai = document.getElementById('elementoOndeVoceEsta').parentNode;
corPai.style.color = 'red';

let textoPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
textoPrimeiroFilhoDoFilho.innerText = 'Texto do primeiro filho do filho!';

console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').nextSibling);

/*
*Crie um irmão para elementoOndeVoceEsta
Crie um filho para elementoOndeVoceEsta
Crie um filho para primeiroFilhoDoFilho
A partir desse filho criado, acesse terceiroFilho
*/

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let tagP = document.createElement('p');
tagP.innerText = 'Texto inserido por JavaScript';
ondeVoceEsta.appendChild(tagP);

let novoFilho = document.getElementById('pai');
let textoSection = document.createElement('section');
novoFilho.appendChild(textoSection);

/*
Remova todos os elementos filhos de pai exceto:
elementoOndeVoceEsta
primeiroFilhoDoFilho
*/

let paiDoPai = document.getElementById('pai').children;
console.log(paiDoPai);

for (let i = 0; i < paiDoPai.length; i += 1) {
    let filhos = paiDoPai[i];
    if (filhos.id !== 'elementoOndeVoceEsta') {
        //console.log(i+1);
        //paiDoPai.removeChild(filhos); //Por que isso não funciona?
        filhos.remove();
    } else if (filhos.id !== 'primeiroFilhoDoFilho') {
        console.log('Apagou');
        filhos.remove();
    }
}