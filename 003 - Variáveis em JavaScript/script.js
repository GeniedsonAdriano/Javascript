var nome = "Joao Ribeiro";
var idade = 21;
var administrador = false;

//string
console.log(nome);
//numero
console.log(idade);
//boleano
console.log(administrador);

//é podemos criar uma varivel sem valor e dps é possivel determinar o valor 
var cidade;
cidade = "Lisboa";
console.log(cidade);

// let e const

/*let tem escopo de bloco. 
uma variável declarada com let em um bloco 
estará disponível apenas dentro daquele bloco.*/
let texto = "frase de um texto";
texto = "nada";
console.log(texto);

//const é um valor fixo e nao pode ser alterado
const pi = 3.14;
pi = 25;