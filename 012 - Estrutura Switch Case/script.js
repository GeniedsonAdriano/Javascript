// INSTRUCAO CONDICIONAL SWITCH CASE

//alternativa ao if, else, if else

//Estrutura
/*let valor = 1
switch (valor) {
    case 1:
        //codigo para o valor 1
        break
    case 2:
        //codigo para o valor 2
        break
    default:
        //codigo para outro valor
        break
}
*/

//EXEMPLO 1
/*let avaliacao = 3
switch (avaliacao) {
    case 1:
        console.log("resultado mau")
        break
    case 2:
        console.log("resultado insuficiente")
        break
    case 3:
        console.log("resultado positivo")
        break
    case 4:
        console.log("resultado bom")
        break
    case 5:
        console.log("resultado excelente")
        break
    default:
        console.log("avaliacao invalida")
        break
}
*/

//EXEMPLO 2
/*let valor = 10
switch (valor) {
    case 10:
        console.log('valor igual a 10')
        break
    case true:
        console.log('valor verdadeiro')
}
*/

//exemplo 3 - maior que
/*let valor = 10
switch (true) {
    case (valor < 10):
        console.log('valor inferior a 10')
        break
    case (valor > 10):
        console.log('valor superior a 10')
        break
    default:
        console.log('valor igual a 10')
        break
}
*/

//exemplo 4 - varios case
let nome = 'joao'
switch (nome) {
    case "Joao":
    case "joaquin":
    case "joana":
    case "jose":
        console.log("O nome é com a letra j")
        break
    case "fernando":
        console.log('o nome comeca com a letra f')
        break
    default:
        console.log('nao foi possivel identificar a letra inicial')
    break
}