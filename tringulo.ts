const tela = require('readline-sync')
const enquanto:boolean = true

while (enquanto) {

	const l1:number = Number(tela.question('Digite o primeiro lado do triângulo: '))
	const l2:number = Number(tela.question('Digite o segundo lado do triângulo: '))
	const l3:number = Number(tela.question('Digite o terceiro lado do triângulo: '))

	let trianguloPossivel:boolean = l1 + l2 > l3 && l2 + l3 > l1 && l1 + l3 > l2
	
	if (trianguloPossivel === true) {
		if (l1 === l2 && l1 === l3 && l2 === l3) {
			console.log('Triângulo Equilátero')
		} else if (l1 != l2 && l1 != l3 && l2 != l3) {
			console.log('Triângulo Escaleno')
		} else {
			console.log('Triângulo Isósceles')
		}
	} else {
		console.log('Esse triângulo não existe!!')
	}

	const continuar:string = tela.question(`Deseja continuar? \n1 - Sim | 2 - Não\n`)
	if (continuar === '2') {
		console.log('Aplicação encerrada!')
		break
	}

}
