/**
- Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora. 
- Os requisitos para avaliar o projeto são:
- implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy 
- para realizar as operações de Soma, Subtração e Multiplicação de números inteiros;
- o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro;
- como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar;
- no final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação.
 */


var readlinesync = require('readline-sync')

//INTERFACE STRATEGY
interface Strategy {
    execute(numero1: number, numero2: number): number
}

//STRATEGY CONCRETE SOMA
class Soma implements Strategy {
    public execute(numero1: number, numero2: number): number {
       return parseInt(numero1.toString()) + parseFloat(numero2.toString())
    }
}

//STRATEGY CONCRETE SUBTRAÇÃO
class Subtracao implements Strategy {
    public execute(numero1: number, numero2: number): number {
        return numero1 - numero2
    }
}

//STRATEGY CONCRETE MULTIPLICAÇÃO
class Multiplicacao implements Strategy {
    public execute(numero1: number, numero2: number): number {
        return numero1 * numero2
    }
}


//CONTEXT CLASS
class Calculadora {

    calcular(operacao: Strategy) {
        return operacao.execute(num1, num2)
    }
}


//CÓDIGO DO CLIENTE

let num1: number = readlinesync.question('insira o primeiro numero: \n')
let num2: number = readlinesync.question('insira o segundo numero: \n')
let operadorMatematico: string = readlinesync.question('informe a operacao que deseja realizar: [+] [-] [x]: \n')

const fazerConta = new Calculadora()

if (operadorMatematico == '+') {
    console.log(`${num1} + ${num2} = ${fazerConta.calcular(new Soma())}`)
} else if (operadorMatematico == '-') {
    console.log(`${num1} - ${num2} = ${fazerConta.calcular(new Subtracao())}`)
} else if (operadorMatematico == 'x') {
    console.log(`${num1} x ${num2} = ${fazerConta.calcular(new Multiplicacao())}`)
} else {
    throw Error('ERR04 - Operação inválida')
}

