function palindromo (palavra){
    let lista = ""
    for (let i = palavra.length-1 ; i > -1; i--){
        lista = lista + palavra[i]
    }
    if(palavra === lista){
        console.log(true);
    }else{
        console.log(false);
    }
}
console.log("A palavra é um palindromo? ");
palindromo("arara")