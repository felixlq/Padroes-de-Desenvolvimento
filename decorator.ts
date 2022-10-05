/**Aplique o padrão de projeto Decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado.
-  O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49.
- o sanduíche de frango assado custa $4,50.
- o ingrediente adicional pepperoni custa $0,99.
- o ingrediente adicional queijo mussarela ralado custa $2,00.
- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado. */


//INTERFACE

interface Sanduiche{
    getDescricao():string
    getValor():number
}

//CONCRET COMPONENT   

class SanduicheFrango implements Sanduiche{
    private descricao = 'Sanduiche de Frango'
    private valor = 4.50 
    
    getDescricao(): string {
        return this.descricao
    }
    
    getValor(): number {
        return this.valor
    }
}

//DECORATOR

class IngredienteDecorator implements Sanduiche{
    constructor(protected produto: Sanduiche){}
        
    getDescricao(): string{
        return this.produto.getDescricao()
    }
    getValor(): number {
        return this.produto.getValor()
    }
}    


//CONCRET DECORATOR

class Pepperoni extends IngredienteDecorator{
    
    getDescricao():string{
        return this.produto.getDescricao() + ', Pepperoni'
    }

    getValor():number{
        return this.produto.getValor() + 0.99
    }
}


//CONCRET DECORATOR

class MussarelaRalada extends IngredienteDecorator{
    
    getDescricao():string{
        return this.produto.getDescricao() + ', Queijo mussarela ralado'
    }

    getValor(): number {
        return this.produto.getValor() + 2.00
    }
}



// CÓDIGO DO CLIENTE

const pedido1 = new SanduicheFrango()
    //console.log(pedido1);

const pedido2 = new Pepperoni(pedido1)
    //console.log(pedido2.getDescricao());
    //console.log(pedido2.getValor());

const pedido3 = new MussarelaRalada(pedido2)
    console.log(`Pedido despachado: ${pedido3.getDescricao()}, Custa: $${pedido3.getValor()}`);
    //console.log(pedido3.getValor());
