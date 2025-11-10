// OBJETOS

// Definir um objeto

let pessoa = {
    // propriedades
    nome: "Joao",
    apelido: "ribeiro",
    idade: 48,
    genero: "masculino",

    //metodos
    apresentar_nome: function() {
        return this.nome + " " + this.apelido
    },

    apresentar_idade: function() {
        return this.idade + " anos de idade" 
    },

    hobbies: [
        'programacao',
        'cinema',
        'musica'
    ]
}
// NOTA: As chaves podem surgir tambem com aspas.

//apresentar dados de um objeto
/*
console.log(pessoa)
console.log(pessoa['genero'])
console.log(pessoa.apresentar_nome())
console.log(pessoa.apresentar_idade())
console.log(pessoa.hobbies)
*/

// Apresentar todas as propriedades do objeto
/*
for(let propriedade in pessoa){
    console.log([propriedade])
}
*/

// Adicionar propriedades ao objeto
/*
pessoa.email = "Joao.ribeiro@gmail.com"
pessoa['mobile'] = "12345689"

console.log(pessoa.email)
console.log(pessoa.mobile)
console.log(pessoa)
*/

// Eliminar proriedades de um objeto
/*
delete pessoa.idade
console.log(pessoa.idade) //indefinido
*/

// MUITO IMPORTANTE: valor vs referencia
// os objetos sao tratados como referencias na memoria.
// quando copiamos um objeto a partir de outro,
// nao estamos criando um novo objeto. apenas uma nova referencia.

let transporte = {
    tipo: "automovel",
    ano: 2032,
    marca: "audi"
}

/*
let novo_transporte = transporte
novo_transporte.marca = "mercedes"

console.table(transporte)
console.table(novo_transporte)
*/

// Uma forma de criar um novo objeto a partir de outro:
/*
let transporte_final = Object.assign({}, transporte)
transporte_final.marca = "nissan"
console.table(transporte)
console.table(transporte_final)
*/

// outra forma: spread operator
/*
let transporte2 = {...transporte}
transporte2.marca = "tesla"
console.table(transporte)
console.table(transporte2)
*/

class cachorro {
    constructor(nome, idade, raca, peso){
        this.nome = nome
        this.idade = idade
        this.raca = raca
        this.peso = peso
    }
    
    setNome(novoNome){
        this.nome = novoNome
    }
    
    setIdade(novoIdade){
        if(typeof novoIdade === 'number' && novoIade >= 0){
            this.idade = novoIdade
        }else{
            console.log(`idade invalida!`)
        }
    }
    
    setRaca(novoRaca){
        this.raca = novoRaca
    }
    
    setPeso(novoPeso) {
        if (typeof novoPeso === "number" && novoPeso > 0) {
            this.peso = novoPeso;
        } else {
            console.log("Peso inválido!");
        }
    }
    
    getInfo(){
        return `nome: ${this.nome}\nidade: ${this.idade}\nraça: ${this.raca}\npeso: ${this.peso}kg`;
    }
}

console.log(Object.getPrototypeOf(cachorro));

// RAÇA
class Race {
    constructor(name) {
        this.name = name;
    }
}

// CLASSE
class Class {
    constructor(name) {
        this.name = name;
    }
}

// HABILIDADE
class Skill {
    constructor(skillName, manaCost, castTime, damage, type) {
        this.skillName = skillName;
        this.manaCost = manaCost;
        this.castTime = castTime;
        this.damage = damage;
        this.type = type;
    }

    cast(caster, target) {
        console.log(`${caster.race.name} ${caster.class.name} lança ${this.skillName} em ${target}, causando ${this.damage} de dano de ${this.type}.`);
    }
}

// PERSONAGEM
class Character {
    constructor(name, race, charClass) {
        this.name = name;
        this.race = race;
        this.class = charClass;
    }
}

// Criando raças
let human = new Race("Humano");
let orc = new Race("Orc");

// Criando classes
let mage = new Class("Mago");
let warrior = new Class("Guerreiro");

// Criando habilidades
let fireball = new Skill("Fireball", 50, 2.5, 120, "Fogo");

// Criando personagens
let jaina = new Character("Jaina", human, mage);
let thrall = new Character("Thrall", orc, warrior);

// Usando a skill
fireball.cast(jaina, thrall.name);
