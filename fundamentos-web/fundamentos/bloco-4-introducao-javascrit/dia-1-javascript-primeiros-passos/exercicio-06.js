let peca;

console.log("Pecas do xadrez.\n REI \n DAMA \n BISPO \n CAVALO \n TORRE \n PEAO");
console.log("\n");

if (peca === "rei") {
    console.log("o rei pode movimentar para todos os lados, uma casa por vez");
}
else if (peca === "dama") {
    console.log("a dama é a peca mais forte do jogo e pode se movimentar por todas as casas,nas diagonais, horizontais e verticais.");
}
else if (peca === "bispo") {
    console.log("O bispo pode se movimentar por todas as diagonais");
}
else if (peca === "cavalo") {
    console.log("O cavalo se movimenta em L, podendo pular pecas no tabuleiro");
}
else if (peca === "torre") {
    console.log("A torre se movimenta por todas as horizontais e verticais");
}
else if (peca === "peao") {
    console.log("o peao so pode movimentar uma casa para frente, podendo captura as pecas que estiverem na sua diagonal.");
}
else {
    console.log("peca nao existe no xadrez");
}