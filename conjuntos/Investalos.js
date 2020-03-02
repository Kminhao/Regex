const texto = '1,2,3,4,5,6,7,8,a.b c!d?e[f, ç'

console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[1-3a-b]/gi))