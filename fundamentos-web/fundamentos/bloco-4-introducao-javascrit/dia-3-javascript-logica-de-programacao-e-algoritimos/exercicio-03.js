let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior;
let menor;

for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
        if (i === 0) {
            maior = array[i]
            menor = array[i]
        } else if (maior.length < array[i].length) {
            maior = array[i]
        } else if (menor.length > array[i].length) {
            menor = array[i]
        }
    }
}
console.log("A maior palavra é: ", maior);
console.log("A menor palavra é: ", menor);