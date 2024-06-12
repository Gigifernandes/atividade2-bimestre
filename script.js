// script.js

let narrativa = document.getElementById('narrativa');
let narrativa2 = document.getElementById('narrativa2');
let narrativa3 = document.getElementById('narrativa3');
let comecar = document.getElementById('comecar');
let proximo = document.getElementById('proximo');
let seguinte = document.getElementById('seguinte');
let questions = document.querySelectorAll('.question');
let resultado = document.getElementById('resultado');
let imgdez= document.getElementById('img-10');
let currentQuestion = 0;
let answers = [];
let image;

comecar.addEventListener('click', () => {
  narrativa.style.display = 'none';
  narrativa2.style.display = 'block';
});

proximo.addEventListener('click', () => {
  narrativa2.style.display = 'none';
  narrativa3.style.display = 'block';
});

seguinte.addEventListener('click', () => {
  narrativa3.style.display = 'none';
  questions[0].style.display = 'block';
});

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    if (e.target.type === 'radio') {
      answers.push(e.target.value);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        questions[currentQuestion - 1].style.display = 'none';
        questions[currentQuestion].style.display = 'block';
      } else {
        calculateResult();
      }
    }
  });
});

function calculateResult() {
  let positiveAnswers = answers.filter((answer) => answer === 'sim').length;
  let result;
  let imageSrc;
  questions.forEach((question) => {
    question.style.display = 'none'; // esconde todas as perguntas
  });
  if (positiveAnswers >= 6 && positiveAnswers <= 8) {
    result = 'Você é cumplice no assassinato';
    imageSrc = 'img/suspeito.png'; // imagem para cumplice
  } else if (positiveAnswers >= 9) {
    result = 'Você é culpado(a) do crime';
    imageSrc = 'img/culpado2.png'; // imagem para culpado
  } else {
    result = 'Você é inocente e está sofrendo com a morte do peixe(sinto muito)';
    imageSrc = 'img/cumplice2.png'; // imagem para inocente
  }

  const imagemResultado = document.getElementById('imagem-resultado');
  imagemResultado.src = imageSrc;

  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = `${result}!`;

 
  imgdez.style.display = 'none';
  resultado.style.display = 'block'; 
}