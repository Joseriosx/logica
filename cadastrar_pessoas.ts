const tela = require('readline-sync')
let nomes:string[] = []
let anos:number[] = []
let resultado:string[] = []

let loop:boolean = true

while(loop) {
	
	const nome = tela.question('Informe o nome da pessoa: ')
	const ano = tela.question('Informe a idade: ')

	nomes.push(nome)
	anos.push(ano)

	const continuar:number = Number(tela.question('Deseja continuar? 1 - Sim | 2 - Não'))
	
	resultado.push(`${nome} - ${ano}`)
	resultado.sort()
	
	if(continuar === 2) {
		loop = false

		for(let i = 0; i < nome.length; i++) {
			console.log(`${i + 1}. ${resultado[i]}`)
		}
	}	
}
