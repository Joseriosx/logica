let frutas:string[] = ['Maça', 'Pera', 'Uva', 'Melancia']

console.log('Tamanho: '+frutas.length)
console.log('[0]'+frutas[0])
console.log('Ultimo: '+frutas[frutas.length-1])

frutas.push('Banana')
frutas.push('Morango') //Adiciona no final da lista
frutas.unshift('Laranja') //Adiciona no inicio da lista

frutas[1] = 'Melão' //Substitui valores
frutas.pop() //Remove o ultimo elemento
frutas.shift() //Remove o primeiro elemento
console.log(frutas)

//Interação da lista
for(let i = 0; i < frutas.length; i++) {
	let contador = i + 1
	console.log(contador + '. ' + frutas[i])
}

console.log(frutas.sort())
console.log(frutas.reverse())
