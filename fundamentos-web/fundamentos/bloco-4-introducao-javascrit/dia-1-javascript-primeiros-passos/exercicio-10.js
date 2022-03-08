let produto = 200
let vendaProduto = 270

let imposto = produto * 20 / 100
let custoReal = produto + imposto

let lucro = vendaProduto - custoReal
let milVendas = lucro * 1000

console.log("preço do produto com imposto: ", custoReal, "preço de venda: ", vendaProduto, " Lucro apos 10.000 vendas: ", milVendas);