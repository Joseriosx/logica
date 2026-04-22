const tela = require('readline-sync')

const m:number = Number(tela.question('Informe o valor em metro(s): '))
const cm:number = Number(m * 100)
const mm:number = Number(m * 1000)

console.log(`Metro(s): ${m}\nCentimetro(s): ${cm}\nMilimetro(s): ${mm}`)
