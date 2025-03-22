function numeroPrimoDeAlguem(numero){
    if(numero < 2) return false;
        for (let a = 2; a <= Math.sqrt(numero); a++){
        if(numero % a ===0) return false;
        }
    return true;
}

console.log(numeroPrimoDeAlguem(13))