const tela = require('readline-sync')

const nome:string = String(tela.question('Informe o nome do aluno: '))

const nota1:number = Number(tela.question('Informe a primeira nota: '))
const nota2:number = Number(tela.question('Informe a segunda nota: '))
const nota3:number = Number(tela.question('Informe a terceira nota: '))

const media = (nota1 + nota2 + nota3)/3 

//Aluno aprovado (Media maior ou igual a 7.0)
let situacao:string

if (media >= 7) {
	situacao = 'Aprovado'
} else {
	situacao = 'Reprovado'
}

console.log(`Aluno(a), ${nome} obteve a média de ${media} e está: ${situacao}`)
