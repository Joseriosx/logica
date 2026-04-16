const promptSync = require('prompt-sync')

const tela = promptSync()

let nome:string
let idade:number

nome = tela("Qual seu nome? ")
idade = Number(tela("Qual é a sua idade? "))

console.log("Nome: "+nome+" Idade: "+idade)

