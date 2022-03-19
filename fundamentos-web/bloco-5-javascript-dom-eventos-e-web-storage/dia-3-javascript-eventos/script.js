function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let listaSexta = [];
// EXERCICIO 01
let diaDoMes = document.querySelector("#days");
function diasNoMes() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let diaItem = document.createElement("li");
    if ((dia === 24) | (dia === 31)) {
      diaItem.className = "day holiday";
      diaItem.innerHTML = dia;
      diaDoMes.appendChild(diaItem);
    } else if ((dia === 4) | (dia === 11) | (dia === 18)) {
      listaSexta.push(dia);
      diaItem.className = "day friday";
      diaItem.innerHTML = dia;
      diaDoMes.appendChild(diaItem);
    } else if (dia === 25) {
      listaSexta.push(dia);
      diaItem.className = "day friday holiday";
      diaItem.innerHTML = dia;
      diaDoMes.appendChild(diaItem);
    } else {
      diaItem.className = "day";
      diaItem.innerHTML = dia;
      diaDoMes.appendChild(diaItem);
    }
  }
}
diasNoMes();

let local = document.querySelector(".buttons-container");

// EXERCICIO 02
function creatButton(feriados) {
  let btn = document.createElement("button");
  btn.id = "btn-holiday";
  btn.innerText = "Feriados";
  local.appendChild(btn);
}
creatButton("Feriados");

// EXERCICIO 03
let clicar = document.getElementById("btn-holiday");
clicar.addEventListener("click", function () {
  let holiday = document.getElementsByClassName("day holiday");
  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === "green") {
      holiday[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holiday[index].style.backgroundColor = "green";
    }
  }
});

// EXERCICIO 04
let btnSexta = document.createElement("button");
function creatButton2(sextaFeira) {
  btnSexta.id = "sexta-feira";
  btnSexta.innerHTML = "Sexta-feira";
  local.appendChild(btnSexta);
}
creatButton2("sexta-feira");

// EXERCICIO 05
let diasSexta = document.getElementsByClassName("day friday");
let clicou = document.getElementById("sexta-feira");
clicou.addEventListener("click", function () {
  for (let index = 0; index < diasSexta.length; index += 1) {
    if (diasSexta[index].innerHTML === "SEXTA-FEIRA!") {
      diasSexta[index].innerHTML = listaSexta[index];
    } else {
      diasSexta[index].innerHTML = "SEXTA-FEIRA!";
    }
  }
});

// EXERCICIO 06
let li = document.getElementsByClassName("day");
function zoom() {
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseenter", function (event) {
      event.target.style.fontSize = "38px";
    });
    li[i].addEventListener("mouseout", function (event) {
      event.target.style.fontSize = "20px";
    });
  }
}
zoom();

// EXERCICIO 07
function tarefa(cozinhar) {
  let span = document.createElement("span");
  let divSpan = document.getElementsByClassName("my-tasks")[0];
  divSpan.appendChild(span);
  span.innerHTML = "Sushi";
}
tarefa();

// EXERCICIO 08
function cores(cor) {
  let divCor = document.createElement("div");
  let div = document.getElementsByClassName("my-tasks")[0];
  divCor.className = "task";
  div.appendChild(divCor);
  divCor.style.background = cor;
}
cores("blue");
