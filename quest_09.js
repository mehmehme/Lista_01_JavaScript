function relatorioOcorre(palav,letra){
    return[...palav].filter(c => c === letra).length;
}

console.log(relatorioOcorre('pineumoultramicrocopicosiliconovulcanoconiotico', 'o'))