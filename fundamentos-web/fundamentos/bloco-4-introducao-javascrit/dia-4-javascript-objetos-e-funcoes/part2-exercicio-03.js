function array (inteiros){
    for (let i = 0; i < inteiros.length; i++){
        if (i === 0){
            menor = inteiros[i]
            x = i
        }else if(menor > inteiros[i]){
            menor = inteiros[i]
            x = i
        }
    }
}
let lista = [2, 4, 6, 7, 10, 0, -3];
array(lista)
console.log("A posicao do menor valor é ", x );