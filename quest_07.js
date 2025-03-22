function palindromo(palav){
    let inverso =
    palav.split('').reverse().join('');
    return palav === inverso
}

console.log(palindromo('socorrammesubinoonibusemmarrocos'));
