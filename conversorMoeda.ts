const tela = require('readline-sync')
let enquanto:boolean = true


while (enquanto) {
	const moeda:number = Number(tela.question('Digite a quantidade de dinheiro em real que deseja converter: '))
	const escolha = tela.question(`Qual a Moeda?\n1 - Dólar\n2 - Euro\n3 - Peso Argentino\n4 - Sair da Aplicação\n`)
	switch(escolha){
		case "1":
			console.log(`Real: ${moeda}\nDólar: ${moeda/5.03}`)
			break
		case "2":
			console.log(`Real: ${moeda}\nEuro: ${moeda/5.87}`)
			break
		case "3":
			console.log(`Real: ${moeda}\nPeso Argentino: ${moeda/0.0036}`)
			break
		case "4":
			console.log('Aplicação Encerrada')
			enquanto = false
			break
		default:
			console.log('Opção desconhecida')
			break
	}
}
