const tela = require('readline-sync')

const ano:number = Number(tela.question('Qual seu ano de nascimento? '))

const idade:number = 2026 - ano

if (idade > 18) {
	console.log(`Você tem ${idade} e é maior de idade`)
}
else {
	console.log(`Você tem ${idade} e é menor de idade`)
}
