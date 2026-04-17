const tela = require('readline-sync')

let nome:string
let idade:number

nome = tela.question("Qual seu nome? ")
idade = Number(tela.question("Qual é a sua idade? "))

console.log("Nome: "+nome+" Idade: "+idade)

