const n1 = 15 
const n2 = 40 
const n3 = 100

if (n1 > n2 && n1 > n3) {
    console.log("O maior é ", n1 );
}
else if (n2 > n1 && n2 > n3){
    console.log("O maior é ", n2);
}
else if (n3 > n1 && n3 > n2){
    console.log("O maior é ", n3);
}
else{
    console.log("nao existe");
}