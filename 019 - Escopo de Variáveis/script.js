// ESCOPO DE VARIAVEIS

// EXEMPLO 1
/*
let valor = 10
console.log(valor)
*/

// EXEMPLO 2
/*
let valor = 10
function escrever(){
    console.log("Funcao: " + valor)
}

escrever()
console.log(valor)
*/

// EXEMPLO 3
/*
let valor = 10 // global scope

function escrever(){
    let valor = 100 // local scope
    console.log("funcao: " + valor)
}

escrever()
console.log(valor)
*/

// EXEMPLO 4
/*
for(let i=1; i < 10; i++){
    console.log(i)
}

console.log(i)
*/