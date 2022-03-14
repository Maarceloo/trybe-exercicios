/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 ok Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 ok Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 ok Crie uma função que mude a cor do quadrado vermelho para branco.
 ok Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 ok Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function futuro() {
  document.getElementById("texto").innerText =
    "Me vejo trabalhando na area de tecnologia sendo um excelente desenvolvedor web!";
}

function cor() {
  document.getElementsByClassName("main-content")[0].style.backgroundColor =
    "rgb(76,164,109";
}

function white() {
  document.getElementsByClassName("center-content")[0].style.backgroundColor =
    "white";
}

function corrige() {
  document.getElementsByClassName("title")[0].innerText =
    "Exercício 5.1 - JavaScript";
}

function maiusculo() {
  document.getElementsByClassName("center-content")[0].innerText.toUpperCase();
  
}

function mostra() {
    let texto = document.getElementsByClassName("center-content")[0].innerText
    console.log(texto);
}

corrige();
futuro();
cor();
white();
maiusculo();
mostra();