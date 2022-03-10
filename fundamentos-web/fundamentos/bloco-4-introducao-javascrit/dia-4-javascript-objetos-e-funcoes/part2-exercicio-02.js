function array (inteiros){
    let maior;
    for (let i = 0; i < inteiros.length; i++){
        if (i === 0){
            maior = inteiros[i]
            x = i
        }else if(maior < inteiros[i]){
            maior = inteiros[i]
            x = i
        }
    }
}
let lista = [2, 3, 6, 7, 10, 1];
array(lista)
console.log(x);
///console.log("A posicao do maior valor é ", x );