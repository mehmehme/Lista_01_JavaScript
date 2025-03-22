function somarAsCoisas(array){
    return array.reduce((soma,numero)=> soma + numero, 0 );
}

console.log(somarAsCoisas([1,4,7,5,8,7]));