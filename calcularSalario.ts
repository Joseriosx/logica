const tela = require('readline-sync')

const salario:number = Number(tela.question('Informe seu salário: '))
const ajuste:number = salario + salario*0.15

console.log(`O salário com ajuste de 15% será: ${ajuste}`)
