const btnEnviar = document.getElementById("btn-enviar");
function enviar(event) {
  event.preventDefault();
}
btnEnviar.addEventListener("click", enviar);

const btnLimpar = document.createElement("button");
const div = document.getElementsByClassName("botao");
btnLimpar.id = "limpar";
btnLimpar.innerText = "limpar";
div[0].appendChild(btnLimpar);

btnLimpar.addEventListener("click", function () {
  location.reload();
});
