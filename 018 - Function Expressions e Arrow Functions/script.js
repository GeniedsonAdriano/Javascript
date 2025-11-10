//  FUNCTION EXPRESSIONS

/*
function escrever1(){
    console.log("Ola mundo")
}

let escrever2 = function(){
    console.log("Ola mundo")
}

escrever1()
escrever2()
*/

//evocar corretamente a funcao

// funcao() //nao vai funcionar

/*
let funcao = function(){
    console.log("texto da funcao")
}
funcao()
*/

//arrow function - introduzidas com o ES6 - sintaxe mais redundante

/*
let funcao1 = function(){
    console.log("funcao 1")
}

let funcao2 = () => {
    console.log("funcao 2")
}

funcao1()
funcao2()
*/

//arrow functions com paramentros
/*
let funcao = (a,b) => {
    return a + b
}

console.log(funcao(10,20))
*/

// ou ainda mais simples..

/*
let adicao = (a,b) => a + b
console.log(adicao(100,200))

let escrever = mensagem => console.log(mensagem)
escrever("arrow function!")
escrever("javascript é fantastico")
*/
