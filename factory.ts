/**Aplique o Factory Method para fabricar computadores, usando como base o exemplo visto de static
 * e parametrizado no hipertexto.

Considere que:
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server;
- RAM e HD devem estar em GB;
- CPU deve estar em GHz;
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.
 */



//importação da biblioteca readline-sync para gerar inputs pelo terminal
let readlineSync = require('readline-sync')

//Interface criada
interface IComputador {
    cpu: number;
    ram: number;
    hd: number;
    type: string
}

class Servidor implements IComputador {  //classe dos Produtos (Servidor)
    cpu: number;
    ram: number;
    hd: number;
    type: string
    constructor(cpu: number, ram: number, hd: number, type: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.hd = hd;
        this.type = type;
    }
    getCpu() {
        return this.cpu
    }
    getRam() {
        return this.ram
    }
    getHd() {
        return this.hd
    }
    getType() {
        return this.type
    }
    //método toString - usado para organizar todas as característica do produto
    toString() {
        let configServidor: Array<string> = [`Tipo: ${this.type}, Cpu: ${this.cpu}Ghz, Ram: ${this.ram}GB, Hd: ${this.hd}GB`]
        return configServidor
    }
}

class DesktopPc implements IComputador {  //classe dos Produtos (DesktopPC)
    cpu: number;
    ram: number;
    hd: number;
    type: string
    constructor(cpu: number, ram: number, hd: number, type: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.hd = hd;
        this.type = type;
    }
    getCpu() {
        return this.cpu
    }
    getRam() {
        return this.ram
    }
    getHd() {
        return this.hd
    }
    getType() {
        return this.type
    }
    //método toString - usado para organizar todas as característica do produto
    toString() {
        let configDesktop: string[] = [`Tipo: ${this.type}, Cpu: ${this.cpu}GHz, Ram: ${this.ram}GB, Hd: ${this.hd}GB`]
        return configDesktop
    }
}
//Clase que irá Fabricar os Computadores através dos inputs dos clientes
class Fabrica implements IComputador {
    cpu: number;
    ram: number;
    hd: number;
    type: string;
    constructor(cpu: number, ram: number, hd: number, type: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.hd = hd;
        this.type = type;
    }
    toString() {
        let configuracao: Array<string> = [`Tipo: ${this.type}, Cpu: ${this.cpu}GHz, Ram: ${this.ram}GB, Hd: ${this.hd}GB`]
        return configuracao
    }
    //Método usado na criação dos Computadores
    criarPedido() {
        const nomePc: string = readlineSync.question('Nomeie seu PC: ')
        const tipoPc: string = readlineSync.question('Selecione o tipo [1] ou [2]')
        const cpuPc: number = readlineSync.question('Qual o clock do seu processador?[4, 5 ou 6 GHz]')
        const ramPc: number = readlineSync.question('Quanto de memoria vc gostaria? [16, 32, 64 GB]')
        const hdPc: number = readlineSync.question('Quanto de armazenamento vc gostaria?[2000, 5000, 10000 GB]')
        switch (tipoPc) {
            case 'desktop':
                let novoComputadorDesk = new DesktopPc(cpuPc, ramPc, hdPc, 'Desktop')
                console.log(`Computador criado ${nomePc}`)
                console.log(novoComputadorDesk.toString())
                break;
            case 'servidor':
                let novoComputadorServ = new Servidor(cpuPc, ramPc, hdPc, 'Servidor')
                console.log(`Computador criado ${nomePc}`)
                console.log(novoComputadorServ.toString())
                break;
        }
    }
}



//CÓDIGO DO CLIENTE
//Uso o Prototype para chamar o método na classe Fabrica
console.log("#### Fábrica de Computadores ####")
Fabrica.prototype.criarPedido

