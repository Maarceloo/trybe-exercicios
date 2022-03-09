let num = 10
let lista = []

for (let i = num; i > 0; i--) {
    lista.push(i)
}

let fator = 1

for (let x = 0; x < lista.length; x++) {
    fator = fator * lista[x]
}

console.log(fator);