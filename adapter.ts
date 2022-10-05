/**Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.

Siga o exemplo apresentado no Hipertexto 4 e crie as classes AdaptadorPato e AdaptadorPatoDemo
para demonstrar o uso da classe AdaptadorPato.*/

//TARGET
interface Pato{
    grasnar():string
    voar():string
}


interface Galinha{
    cacarejar():string
    ciscar():string
}


//ADAPTER
class PatoAdaptado implements Pato{
    constructor(protected adaptador: GalinhaPadrao){}
    
    grasnar(): string {
        return this.adaptador.cacarejar()
    }
    voar(): string {
        return this.adaptador.ciscar()
    }

}

//ADAPTEE
class GalinhaPadrao implements Galinha{
    cacarejar(): string {
        return 'co-có'
    }
    ciscar(): string {
        return 'ciscando'
    }

}
    

//CLIENT
console.log('Galinha Padrão');
const animal1 = new GalinhaPadrao()
console.log(animal1.cacarejar());
console.log(animal1.ciscar())

console.log('\n');

console.log('Pato Adaptado');
const patoCiscador = new PatoAdaptado(animal1)
console.log(patoCiscador.grasnar())
console.log(patoCiscador.voar());



//TERMINAL 

/*PS E:\Softex\TypeScript\Padroes de Desenvolvimento> npm start

> factory@1.0.0 start
> ts-node adapter.ts

Galinha Padrão
co-có
ciscando


Pato Adaptado
co-có
ciscando
PS E:\Softex\TypeScript\Padroes de Desenvolvimento>*/
