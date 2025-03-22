function aeiou(palav){
    let vogal = 'aeiouAEIOUãÂéÉíÍôÔúÚ';
    return [...palav].filter(char => vogal.includes(char)).length;
}

console.log(aeiou('Algodão'));