function somarNotas(notas){
    return notas.reduce((soma,numero) => soma + numero, 0);
}

function mediaDasNotasDeUmaTurmaCansada(notas){
    return Math.round(somarNotas(notas) / notas.length);
}

console.log(mediaDasNotasDeUmaTurmaCansada([10,9,8,6,3,2,3,4,5,3,2,1,0,2,3,9,8,10]));