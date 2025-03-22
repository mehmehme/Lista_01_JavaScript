function fatorArial(num){
    if(num === 0 || num === 1) return 1;
    return num * fatorArial(num - 1); //pega cada numero e multiplica pelo antecessor
}

console.log(fatorArial(5));