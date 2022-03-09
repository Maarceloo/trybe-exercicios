// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.

let valorFinal = 100;
let x = 0;

for (let index = 50; index <= 100; index++) {
    x = x + index;
}
console.log("A soma de 50 a 100 é: ", x);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.



// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.



// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

let anoDeNascimento = 2005

if (anoDeNascimento <= 2004) {
    console.log("A pessoa é maior de idade");
} else {
    console.log("A pessoa é menor de idade");
}

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let pessoa1 = ["Marcella", 25]
let pessoa2 = ["Carlos", 40]
let pessoa3 = ["Camila", 18]
let idade = pessoa1[1]
let maisNova = pessoa1[0]

if (idade > pessoa2[1]){
    idade = pessoa2[1]
    maisNova = pessoa2[0]
}else if (idade > pessoa3[1]){
    idade = pessoa3[1]
    maisNova = pessoa3[0]
}
console.log(maisNova, "é a mais nova!");