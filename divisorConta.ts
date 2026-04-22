const tela = require('readline-sync')

const conta:number = Number(tela.question('Digite o valor da conta: '))
const pessoas:number = Number(tela.question('Digite a quantidade de pessoas: '))

console.log(`Valor por pessoa (considerando os 10% da taxa de serviço): ${(conta+conta*0.10)/pessoas}`)
