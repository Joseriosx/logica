const tela = require('readline-sync')

const altura:number = Number(tela.question('Insira a altura do retângulo: '))
const largura:number = Number(tela.question('Insira a largura do retângulo: '))

console.log(`O retângulo com ${altura} de altura e ${largura} de largura tem uma área de ${largura * altura} e um perímetro de ${(altura+largura)*2}`)


