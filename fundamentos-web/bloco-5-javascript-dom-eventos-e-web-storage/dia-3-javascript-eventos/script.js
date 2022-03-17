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
// EXERCICIO 01
let diaDoMes = document.querySelector("#days");
function diasNoMes() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let diaItem = document.createElement("li");
    if ((dia === 24) | (dia === 25) | (dia === 31)) {
      diaItem.className = "day holiday";
      diaItem.innerHTML = dia;
      diaDoMes.appendChild(diaItem);
    } else if ((dia === 4) | (dia === 11) | (dia === 18) | (dia === 25)) {
      diaItem.className = "day friday";
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
function creatButton2(sextaFeira) {
  let btnSexta = document.createElement('button');
  btnSexta.id = "sexta-feira"
  btnSexta.innerHTML = "Sexta-feira"
  local.appendChild(btnSexta);
}
creatButton2('sexta-feira');

// EXERCICIO 05