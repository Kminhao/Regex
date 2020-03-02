const texto = 'A,B,C,D,a,b,c,d,1,2,3,4,5,-'

console.log(texto.match(/\d/g))
console.log(texto.match(/\D/g))


console.log(texto.match(/\w/g))
console.log(texto.match(/\W/g))