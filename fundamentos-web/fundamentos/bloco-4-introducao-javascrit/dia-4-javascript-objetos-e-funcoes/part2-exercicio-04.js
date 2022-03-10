//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .

function maiorNome(lista) {
    for (let i = 0; i < lista.lenght; i++) {
        if (i === 0) {
            contador = lista[i].lenght
            nomeMaior = lista[i]
        } else if (contador < lista[i].lenght) {
            contador = lista[i].lenght
            nomeMaior = lista[i]
        }
    }
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
maiorNome(array)
console.log("O nome mais comprido é ", nomeMaior);pai