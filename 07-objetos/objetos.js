/*
console.log('-> Classe e Objeto')
class Usuario{

    // Atributos
    #nome = ''
    #login = ''
    #senha = ''

    // Construtor
    constructor(nome, login, senha){
        this.#nome = nome  + ' (atribuido por construtor)'
        this.#login = login
        this.#senha = senha
    }

    // Métodos/Funções de acesso
    get nome(){
        return this.#nome + ' (lido por getter)'
    }

    set nome(nome){
        this.#nome = nome + ' (atribuido por setter)'
    }

    // ... getters e setters para login e senha

    // Funcionalidades
    identificar(){
        return `Nome do usuário: ${this.#nome}`
    }
}


console.log('Criação, armazenamento em atributos e acesso a funcionalidades de objeto')

// Criação de objeto inicializando o atributo nome por meio do construtor
const usuario = new Usuario('John')

// Leitura de valor do atributo nome do objeto usuario por meio da função get
console.log( usuario.nome )

// Atribuição de valor no atributo nome do objeto usuario por meio da função set
usuario.nome = 'John Michael Osbourne'

console.log( usuario.nome )
console.log('\n')

// Atribuição de objetos a constantes
const ozzy = usuario
const tony = new Usuario('Anthony Frank Iommi')
const geezer = new Usuario('Terence Michael Joseph Butler')
const bill = new Usuario('William Thomas Ward')

// Acesso de função interna (função identificar) dos objetos do tipo Usuario
console.log( ozzy.identificar() )
console.log( tony.identificar() )
console.log( geezer.identificar() )
console.log( bill.identificar() )
console.log('\n')
*/


/*
console.log('-> Objeto funcional')

function Usuario(nome, login, senha) { 

    // A passagem de parâmetros da função e possibilidade de tratamento desses parâmetros equivale ao construtor

    // Atributos
    this._nome = nome + ' (atribuido na criação do objeto)'
    this._login = login
    this._senha = senha

    // Métodos/Funções de acesso
    this.getNome = () => {
        return this._nome + ' (lido por getter)'
    }

    this.setNome = (nome) => {
        this._nome = nome + ' (atribuido por setter)'
    }

    // ... getters e setters para login e senha

    this.identificar = () => {
        return `Nome do usuário: ${this._nome}`
    }
}

console.log('Criação, armazenamento em atributos e acesso a funcionalidades de objeto')

// Criação de objeto inicializando o atributo nome por meio do construtor
const usuario = new Usuario('John')

// Leitura de valor do atributo nome do objeto usuario por meio da função get
console.log( usuario.getNome() )

// Atribuição de valor no atributo nome do objeto usuario por meio da função set
usuario.setNome('John Michael Osbourne')

console.log( usuario.getNome() )
console.log('\n')

// Atribuição de objetos a constantes
const ozzy = usuario
const tony = new Usuario('Anthony Frank Iommi')
const geezer = new Usuario('Terence Michael Joseph Butler')
const bill = new Usuario('William Thomas Ward')

// Acesso de função interna (função identificar) dos objetos do tipo Usuario
console.log( ozzy.identificar() )
console.log( tony.identificar() )
console.log( geezer.identificar() )
console.log( bill.identificar() )
console.log('\n')
*/



console.log('-> Objeto a partir de estrutura literal')

let disciplina = {
    descricao: 'Programação Web',
    sigla: 'PW',
    formacao: {
        curso: 'Tecnico em Desenvolvimento de Sistemas',
        modalidade: 'Integrado ao ensino médio',
        ano: 3
    },
    conteudos: ['JavaScript', 'React JS', 'Mongo DB'],
    turmasAbertas: true
}

console.log(disciplina)
console.log(disciplina.descricao)
console.log(disciplina.formacao.ano)
console.log(disciplina.conteudos[1])
console.log('\n')



console.log('-> Desestruturação')

let { descricao, formacao, conteudos } = disciplina
console.log(descricao)
console.log(formacao.ano)
console.log(conteudos[1])
console.log('\n')



console.log('-> Array de objetos')

let hqs = [
    { 
        titulo: 'V de Vingança', 
        volume: 'Único', 
        autor: 'Alan Moore', 
        publicacao: 1982, 
        preco: 100.00 
    },
    { 
        titulo: 'Akira', 
        volume: '1', 
        autor: 'Katsuhiro Otomo', 
        publicacao: 1980, 
        preco: 90.00 
    },
    { 
        titulo: 'Maus', 
        volume: 'Único', 
        autor: 'Art Spielgelman', 
        publicacao: 1980, 
        preco: 85.00 
    },
    { 
        titulo: 'Cavaleiro das Trevas', 
        volume: 'Único', 
        autor: 'Frank Miller', 
        publicacao: 1986, 
        preco: 120.00 
    },
    { 
        titulo: 'Watchmen', 
        volume: 'Único', 
        autor: 'Alan Moore', 
        publicacao: 1986, 
        preco: 95.00 
    },    
    { 
        titulo: 'Absolute Sandman', 
        volume: '5', 
        autor: 'Neil Gaiman', 
        publicacao: 1989, 
        preco: 250.00 
    },
]

// Lê e apresenta todos os autores
const autores = hqs.map( (hqs) => hqs.autor )

console.log('Todos os autores')
console.log(autores)
console.log('\n')


// Apresenta somente os titulos do autor Alan Moore
const autor = hqs.map( (hqs) => hqs.autor == 'Alan Moore' ? hqs.titulo : '' )

console.log('Títulos do autor Alan Moore')
console.log(autor)
console.log('\n')


// Filtra somente os preços abaixo de R$ 100,00
const precos = hqs.filter( (hqs) => hqs.preco < 100.00 ).map( (hqs) => hqs.preco )

console.log('Preços abaixo de R$ 100,00')
console.log(precos)
console.log('\n')


// Calcula a somatória dos preços
const total = hqs.reduce( (total, hqs) => total + hqs.preco, 0 )

console.log('Total preços')
console.log(total)
