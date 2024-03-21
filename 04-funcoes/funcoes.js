// Funções, Procedimentos e Métodos

/* 
    Assinaturas de métodos
    -> Passagem de parâmetros e Retorno de valor
*/

// Literal
console.log('-> Função literal')

function somar(n1, n2){
    return n1 + n2
}
console.log( somar(10,20) )

console.log('\n')


// Função anônima (armazenada em uma variável)
console.log('-> Função anônima')

const subtrair = function(n1, n2){
    return n1 - n2
}
console.log( subtrair(40,30) )

console.log('\n')


// Os parâmetros são opcionais e pré-definidos
console.log('-> Parâmetros são opcionais e pré-definidos')

function somarVarios(n1, n2, n3 = 0, n4 = 10){
    return n1 + n2 + n3 + n4
}

console.log( somarVarios(2, 4, 6, 8, 10) )
console.log( somarVarios(2, 4, 6, 8) )
console.log( somarVarios(2, 4, 6) )
console.log( somarVarios(2, 4) )
console.log('\n')


// Função por parâmetro
console.log('-> Funções por parâmetro')

function apresentarResultado(n1, n2, operacao = somar){
    console.log( operacao(n1, n2) )
}

apresentarResultado(10, 20)
apresentarResultado(10, 20, subtrair)
apresentarResultado(10, 20, function(n1, n2){
    return n1 * n2
})
apresentarResultado(10, 20, (n1, n2) => n1 / n2)

console.log('\n')


console.log('-> Arrow Function')

// Literal
function dividirLiteral(n1, n2){
    return n1 / n2
}

//Anônima
const dividirAnonima = function (n1, n2){
    return n1 / n2
}

//Arrow function (com corpo uso de chaves para mais de uma linha de instrução)
const dividirArrowComCorpo = (n1, n2) => {
    return n1 / n2
}

// Arraw function (com uma linha de instrução)
const dividirArrow = (n1, n2) => n1 / n2

console.log(dividirArrow(9, 2))


// Arrow function sem parâmetros
function textoLiteral(){
    return 'String de retorno da função literal'
}

const textoArrow = () => 'String de retorno da Arrow function'

console.log(textoLiteral())
console.log(textoArrow())

console.log('\n')


// Funções Callback
console.log('-> Funções Callback')

// Exemplo forEach
console.log('\nCallback: Exemplo forEach')

const bandas = ['Black Sabbath', 'Led Zeppelin', 'Judas Priest']

function mostrar(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}

bandas.forEach(mostrar)
console.log('\n')

bandas.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`))
console.log('\n')

bandas.forEach(nome => console.log(nome))


// Exemplo filter
console.log('\nCallback: Exemplo filter')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Forma 'tradicional'
const pares1 = []
for(let n of numeros){
    if(n % 2 == 0){
        pares1.push(n)
    }
}
console.log(numeros)
console.log(pares1)
console.log('\n')


// Com filter
// Callback de função anônima 
const pares2 = numeros.filter(function(n){
    return n % 2 == 0
})
console.log(pares2)
console.log('\n')


// Callback de Arrow Function
const impares = numeros.filter(n => n % 2 != 0)
console.log(impares)
console.log('\n')


// Atribuindo Arrows Functions a variáveis 
const filtraPares = n => n % 2 == 0
const filtraImpares = n => n % 2 != 0

const pares3 = numeros.filter(filtraPares)
const impares1 = numeros.filter(filtraImpares)

console.log(numeros)
console.log(pares3)
console.log(impares1)
console.log('\n')


// Closures
console.log('-> Funções Closures')

const externa = function(nome){

    let sobrenome = ' da Silva' // variável da função externa

    const interna = function(){
        return `Olá! ${nome} ${sobrenome}, seja bem-vindo!` // a função interna tem acesso ao parâmetro e a variável da função externa
    }

    return interna // nesse exemplo, a função externa retorna a função interna (na verdade, seu retorno)
}, 
nomeCompleto = externa('José')

console.log( nomeCompleto() )

// Este recurso possibilita a estrutura de componentes funcionais (equivalentes a classes em Orientação a Objetos)