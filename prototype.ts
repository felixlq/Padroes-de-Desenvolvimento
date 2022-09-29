/**
- Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. 
- Os requisitos do projeto devem ser:
-
- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
- o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;
- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, 
- por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;
- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos 
- diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;
- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada 
- elemento deve ser um clone dos elementos do array veículos;
- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos.
 */

import { exit } from "process";

const readlinkSync = require('readline-sync');  //Biblioteca importada para os Imputs

abstract class Veiculo {
    modelo: string;
    marca: string;
    cor: string;
    numeroRodas: string;
    constructor(modelo: string, marca: string, cor: string, numeroRodas: string) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
    }
    represent() {
    }
}
class Sedan extends Veiculo {
    type: string
    cambio: string
    constructor(modelo: string, marca: string, cor: string, numeroRodas: string, type: string, cambio: string) {
        super(modelo, marca, cor, numeroRodas)
        this.type = type;
        this.cambio = cambio;
    }
}

class Pickup extends Veiculo {
    type: string
    combustivel: string
    constructor(modelo: string, marca: string, cor: string, numeroRodas: string, type: string, combustivel: string) {
        super(modelo, marca, cor, numeroRodas)
        this.type = type
        this.combustivel = combustivel
    }
}
//Classe aplicação para criação dos objetos e Array que será clonado
class Aplicacao extends Veiculo {

    escolheCarro() {
        let i: number = 0
        for (i = 1; i <= 6; i++) {
            let tipoVeiculo: string = readlinkSync.question('Que tipo de carro pretende criar? [1] Sedan / [2] Pickup / [0] Sair\n')
            if (tipoVeiculo == '1') {
                console.log(`Montando o ${i}º Carro - Tipo Sedan escolhido`)
                let modeloVeiculo: string = readlinkSync.question('Digite o Modelo do carro: \n')
                let marcaVeiculo: string = readlinkSync.question('Qual o fabricante? \n')
                let corVeiculo: string = readlinkSync.question('Cor escolhida: \n')
                let cambioSedan = readlinkSync.question('Tipo de cambio: \n')
                let novoCarro = new Sedan(modeloVeiculo, marcaVeiculo, corVeiculo, '4', 'Sedan', cambioSedan)
                console.log(`Carro criado com sucesso - restam ${6 - i} vagas\n\n`)
                garagem.push(novoCarro)

            } else if (tipoVeiculo == '2') {
                console.log(`Montando o ${i}º Carro - Tipo Pick-Up escolhido`)
                let modeloVeiculo: string = readlinkSync.question('Digite o Modelo do carro: \n')
                let marcaVeiculo: string = readlinkSync.question('Qual o fabricante? \n')
                let corVeiculo: string = readlinkSync.question('Cor escolhida: \n')
                let combPickup = readlinkSync.question('Combustivel: Gasolina ou Diesel \n')
                let novoCarro = new Pickup(modeloVeiculo, marcaVeiculo, corVeiculo, '4', 'Pick-UP', combPickup)
                console.log(`Carro criado com sucesso - restam ${6 - i} vagas\n\n`)
                garagem.push(novoCarro)

            } else if (tipoVeiculo === '0') {
                console.log('Encerrando a aplicação...');
                process.exit()

            } else {
                console.log('Erro4 - escolha inválida - encerrando a aplicação...');
                process.exit()
            }
        }
        return garagem
    }
    // Cria o clone do Array garagem retornando um Array
    clone() {
        let publicGaragem: object[] = Object.assign({}, garagem)
        return publicGaragem
    }
    represent() {
        console.log(`Total de ${garagem.length} vagas ocupadas`)
        return console.log(this.clone())
    }

}



//CÓDIGO DO CLIENTE
const garagem: object[] = []
console.log(`###### Fabrica de Carros ######`)
Aplicacao.prototype.escolheCarro()
Aplicacao.prototype.clone()
Aplicacao.prototype.represent()