const tela = require('readline-sync')

const num:number = Number(tela.question('Digite um número: '))

if (num % 2 === 0) {
	console.log(`O número ${num} é par.`)
} 
else {
	console.log(`O número ${num} é impar`)
}
