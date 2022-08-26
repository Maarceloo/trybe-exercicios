const readLine = require('readline-sync');
const bmi = (peso, altura) => {
    const resultado =  peso / altura ** 2;
    return resultado.toFixed(1);
};


const peso = readLine.questionFloat('qual seu peso? ');
const altura = readLine.questionFloat('qual sua altura? ');
console.log(`ta certo entao voce tem ${peso}Kg e ${altura}Cm de altura... entao belesa vou calcular seu imc`);
const result = bmi(peso, altura)
console.log(`considerando a classificação do IMC. seu resultado foi: ${result}`);

if(result <= 18.5){
    return console.log('Abaixo do peso!');
}else if(result <= 24.9){
    return console.log('peso normal!');
}else if(result <= 29.9){
    return console.log('acima do peso!');
}else if(result <= 34.9){
    return console.log('Obesidade grau I');
}else if(result <= 39.9){
    return console.log('Obesidade grau II');
}else{
    return console.log('Obesidade graus III e IV');
}
