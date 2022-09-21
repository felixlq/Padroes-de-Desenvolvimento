abstract class Veiculo {
    modelo: string;
    marca: string;
    cor:string;
    numeroRodas:number;
    constructor(modelo:string, marca:string, cor:string, numeroRodas:number){
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
    }
    clone(){

    }
    represent(){

    }
}
class Sedan extends Veiculo {
    ano:number;
    cambio:string;
    constructor(ano:number, cambio:string){
    super(modelo, marca, cor, numeroRodas)
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;

    }    


}

class Suv  extends Veiculo{
    numeroPortas:number;
    constructor(modelo:string, marca:string, cor:string, numeroRodas:number, ano:number, cambio:string){
        super(modelo, marca, cor, numeroRodas)
        }

}

class Aplicacao {

    criaPc(){

    }
}

