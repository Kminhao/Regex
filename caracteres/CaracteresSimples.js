const texto = '1,2,3,4,5,6,7,a.b c!d?e'

const regexVirgula = /,/

console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))

console.log(texto.match(/a/i))