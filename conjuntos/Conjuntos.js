const texto = '1,2,3,4,5,6,7,8,a.b c!d?e[f'


const regexPares = /[02368]/g

console.log(texto.match(regexPares))


const texto2 = 'João não vai passear na moto.'

const regexComESemAcento = /n[aã]/g

console.log(texto2.match(regexComESemAcento))