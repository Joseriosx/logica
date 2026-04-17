//Variaveis
const texto = 'O rato roeu a roupa do rei de roma'

//Tamanho do texto
console.log('Tamanho do texto: '+texto.length)
//Texto em caixa alta
console.log('Texto em caixa alta: '+texto.toUpperCase())
//Texto em caixa baixa
console.log('Texto em caixa baixa: '+texto.toLowerCase())
//Verificar se tem algo no texto
console.log('Tem a palavra rato? '+texto.includes('rato'))
console.log('Tem a palavra princesa? '+texto.includes('princesa'))
//Incluir algo no texto e modificar
console.log(texto.replace('rato','jose'))
console.log(texto.replaceAll('a','@'))

//Exercicios
const email = ' jfbatistajunior@gmail.com '
console.log('email: '+email.trim())
console.log('É um email? '+email.includes('@'))
