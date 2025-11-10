/* 
OPERADORES DE COMPARACAO
--------------------------

A == B     Se o valor A é igual ao valor B
A === B    Se o valor e o tipo de dados A é igual ao valor B
A != B     Se o valor de A nao é igual ao de B
A !== B    Se o valor ou o tipo de dados de A é diferente do B
A < B      Se A é menor que B
A > B      Se A é maior que B
A <= B     Se A é menor ou igual a B
A => B     Se A é maior ou igual a B

*/

//valores e tipos de valores
/*
let valor1 = 10;
let valor2 = "10";

if (valor1 === valor2) {
    console.log("os valores sao iguais");
} else {
    console.log("os valores nao sao iguais");
}
*/

/*
OPERADORES LOGICOS
--------------------
Condicao A && condicao B      Verdadeiro se ambas verdadeiras
Condicao A || condicao B      Verdadeiro se uma for verdadeiro
!Condicao A                   Verdadeiro se a condicao A for falsa
*/

//Exemplo 1
/*
let valor1 = 10;
if (valor1 > 5 && valor1 < 15) {
    console.log('o valor esta entre 5 e 15');
} else {
    console.log('o valor nao esta entre o esperado')
}
*/

//Exemplo 2
/*let valor2 = 20;
if(valor2 == 20 || valor2 > 100) {
    console.log('O valor é igual a 20 OU superior a 100'); 
}
*/

//Exemplo 3
/*let enviar_email = false
if(!enviar_email){
    console.log('nao enviar email');
}
*/

//equivalente a:
/*let enviar_email = false;
if(enviar_email == false){
    console.log('nao enviar email');
}
*/

//Exemplo 4
if((10 + 20 > 30) || (40 + 50 < 100)){
    console.log('Pelo menos uma das condicoes é verdadeira');
}