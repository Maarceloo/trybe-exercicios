const soma = (...parametro) => parametro.reduce((a, b ) => a + b, 0);
const lista = [10, 2, 3, 4, 5, 6, 7]
console.log(soma(...lista));
// console.log(soma(1, 2, 3, 4, 5, 6, 7));