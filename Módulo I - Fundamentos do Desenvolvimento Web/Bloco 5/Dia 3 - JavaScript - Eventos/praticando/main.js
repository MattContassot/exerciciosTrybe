const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? Pois ela tem uma classe inicial que a levanta.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? Apagando todas as classes do pai antes.

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

function addClassTech (evento) {
    tagUl = document.querySelector('.container').children;
    for (let i = 0; i < tagUl.length; i += 1) {
        tagUl[i].classList.remove('tech');
    }
    evento.target.className = 'tech';
    evento.target.innerText = input.value;
}

function addTextInput (evento) {
    let input = document.querySelector('#input');
}

function redirectLink (evento) {
    window.open('https://mattcontassot.github.io/', '_blank');
}

function changeColorTitleGreen (evento) {
    let top3 = document.querySelector('#my-spotrybefy');
    top3.style.color = '#2fc18c';
}

function changeColorTitleWhite (evento) {
    let top3 = document.querySelector('#my-spotrybefy');
    top3.style.color = 'white';
}

myWebpage.addEventListener('dblclick', redirectLink);
myWebpage.addEventListener('mouseenter', changeColorTitleGreen);
myWebpage.addEventListener('mouseleave', changeColorTitleWhite);
input.addEventListener('change', addTextInput);
firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech);
thirdLi.addEventListener('click', addClassTech);