const tela = require('readline-sync')

let enquanto:boolean = true

const continuar:string = tela.question(`Quando quiser sair da aplicação digite '1' no lugar do operador\nTecle enter se entendeu.`)

while (enquanto === true) {
	const num1:number = Number(tela.question('Digite o primeiro número: '))
	const num2:number = Number(tela.question('Digite o segundo número: '))
	let operador = tela.question('Digite o operador ( + | - | * | / ): ')
	let resultado:number
	switch(operador) {
		case "+":
			resultado = num1 + num2
			console.log(resultado)
			break
		case "-":
			resultado = num1 - num2
			console.log(resultado)
			break
		case "*": 
			resultado = num1 * num2
			console.log(resultado)
			break
		case "/":
			resultado = num1 / num2
			console.log(resultado)
			break
		case "1":
			console.log('Aplicação encerrada!!')
			enquanto = false
		default:
			console.log('Digite um operador válido!')
			break
	}
}
