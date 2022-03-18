function salvar() {
  let click = document.getElementById("botao");
  let local = document.getElementsByClassName("bloco")[0];
  click.addEventListener("click", function (event) {
    console.log(local);
    local.style.backgroundColor = event.target.innerHTML
  });
}
salvar();

let teste = document.getElementById('botao').innerHTML;
localStorage.setItem('click', teste);
