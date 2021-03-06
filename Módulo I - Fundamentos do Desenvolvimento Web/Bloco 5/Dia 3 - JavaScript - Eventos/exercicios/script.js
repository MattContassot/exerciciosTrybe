function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

/*
Exercício 1:

O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let monthContainer = document.querySelector('#days');

function addDays(month) {
    for (let i = 0; i < month.length; i += 1) {
        let days = document.createElement('li');
        days.innerText = dezDaysList[i];
        days.className = 'day';
        if (days.textContent == 24 || days.textContent == 25 || days.textContent == 31) {
            days.classList.add('holiday');
        }

        if (days.textContent == 4 || days.textContent == 11 || days.textContent == 18 || days.textContent == 25) {
            days.classList.add('friday');
        }

        monthContainer.appendChild(days);
    }
}
addDays(dezDaysList);

/* 
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
 */

function btnFeriados(feriados) {
    let btnConteiner = document.querySelector('.buttons-container');

    let botao = document.createElement('button');
    botao.innerText = feriados;
    botao.id = 'btn-holiday';

    btnConteiner.appendChild(botao);
}
btnFeriados('Feriados');

/* 
Exercício 3
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday"
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)"
 */

const btnFeriado = document.getElementById('btn-holiday');

function colorFeriados() {
    let diasLi = document.querySelector('#days').children;
    for (let i = 0; i < diasLi.length; i += 1) {
        if (diasLi[i].className.includes('holiday')) {
            diasLi[i].style.backgroundColor = 'red';
        }
    }
    btnFeriado.addEventListener('click', colorNormalFeriados);
}

function colorNormalFeriados() {
    let diasLi = document.querySelector('#days').children;
    for (let i = 0; i < diasLi.length; i += 1) {
        if (diasLi[i].className.includes('holiday')) {
            diasLi[i].style.backgroundColor = 'rgb(238,238,238)';
        }
    }
}

btnFeriado.addEventListener('click', colorFeriados);

/* 
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira"
Adicione a este botão o ID "btn-friday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
 */

function btnSextas(sextas) {
    let btnConteiner = document.querySelector('.buttons-container');

    let botao = document.createElement('button');
    botao.innerText = sextas;
    botao.id = 'btn-friday';

    btnConteiner.appendChild(botao);
}
btnSextas('Sexta-feira');

/* 
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias
*/

const btnSexta = document.getElementById('btn-friday');

function boldSextas() {
    let diasLi = document.querySelector('#days').children;
    for (let i = 0; i < diasLi.length; i += 1) {
        if (diasLi[i].className.includes('friday')) {
            diasLi[i].style.fontWeight = 'bold';
            //console.log('entrou');
        }
    }
    btnSexta.addEventListener('click', normalSextas);
}

function normalSextas() {
    let diasLi = document.querySelector('#days').children;
    for (let i = 0; i < diasLi.length; i += 1) {
        if (diasLi[i].className.includes('friday')) {
            diasLi[i].style.fontWeight = 'normal';
            //console.log('saiu');
        }
    }
}

btnSexta.addEventListener('click', boldSextas);
/* 
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original
*/

let dias = document.querySelectorAll('.day');

function contaDias(){
    for (let i = 0; i < dias.length; i += 1) {
        dias[i].addEventListener('mouseenter', zoomIn);
        dias[i].addEventListener('mouseleave', zoomOut);
    }
}
contaDias();

function zoomIn(event) {
    event.target.style.fontSize = '40px';
}

function zoomOut(event) {
    event.target.style.fontSize = '20px';
}
/* 
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"
*/

let btnAddTask = document.querySelector('#btn-add');

function newTask (evento) {
    let input = document.querySelector('#task-input');
    let tasks = document.querySelector('.my-tasks');

    let tarefa = document.createElement('span');
    tarefa.innerText = input.value+'\n';
    tasks.appendChild(tarefa);
}

btnAddTask.addEventListener('click', newTask);

/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"
 */

