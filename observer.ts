/**Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 
 * e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

- implementar uma subclasse da classe Editor chamada TextEditor;
- aplicar o método insertLine, que recebe os parâmetros lineNumber e text;
- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
- aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha 
- correspondente e desloca as linhas posteriores se necessário;
- instanciar um TextEditor e disparar o evento “open”;
- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o 
- texto “EOF”, que não deve ser inserido no objeto textEditor;
- por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado 
- e imprimir todo o conteúdo do arquivo na tela.
 */
const fs = require('fs')
const readlinesync = require('readline-sync')
const arquivo = './observer_texto.txt'




class Editor { //SUBJECT
    texto!: string
    observerList: ObserverTextEditor[] = []

    setTexto(texto: string): string {
        this.notifyObserverTextEditor()
        return this.texto = texto
    }

    getState(): string {
        return this.texto
    }

    insertLine(idx: number, txt: string) {
        let texto: string = fs.readFileSync(arquivo, 'utf-8')
        let fileText: Array<string> = texto.split("\r\n")
        for (let i = fileText.length + 1; i >= idx; i--) {
            fileText[i] = fileText[i - 1];
        }
        fileText[idx - 1] = txt;
        var textoTratado = fileText.filter(function (i) {
            return i;
        });

        return textoTratado
    }

    removeLine(idx: number) {
        let texto: string = fs.readFileSync(arquivo, 'utf-8')
        let fileText: Array<string> = texto.split("\r\n")
        for (let i = idx - 1; i < fileText.length; i++) {
            fileText[i] = fileText[i + 1]
        }

        var linhaRetirada = fileText.filter(function (i) {
            return i;
        });
        return linhaRetirada
    }


    addObserver(observer: ObserverTextEditor) {
        this.observerList.push(observer)
    }

    notifyObserverTextEditor(): void {
        for (let obs of this.observerList) {
            obs.open()
        }

        for (let sav of this.observerList) {
            sav.save()

        }
    }
}

abstract class ObserverTextEditor { //ABSTRACT OBSERVER
    protected subject!: Editor
    open(): any {

    }

    save(): any {

    }
}


class TextEditor extends ObserverTextEditor { //CONCRETE OBSERVER
    constructor(subject: Editor) {
        super()
        this.subject = subject
        this.subject.addObserver(this)
    }

    open(): any {
        if (controler == 1) {
            console.log('Texto Incluido...')
            console.table(novoTexto.insertLine(numeroLinha, escreverTexto))

        } else if (controler == 2) {

            console.log('Linha deletada...')
            console.table(novoTexto.removeLine(deletaLinha))
        }
    }

    save(): any {

        if (controler == 1) {

            fs.writeFileSync(arquivo, novoTexto.insertLine(numeroLinha, escreverTexto).join("\r\n"))
            novoTexto.insertLine(numeroLinha, escreverTexto).join("\r\n")
            console.log('Texto Incluido salvo...')

        } else if (controler == 2) {

            fs.writeFileSync(arquivo, novoTexto.removeLine(deletaLinha).join("\r\n"))
            novoTexto.removeLine(deletaLinha).join("\r\n")
            console.log('Linha deletada salva...')

        } else {
            fs.readFileSync(arquivo, 'utf-8')
            console.log('Mostrando arquivo...')
        }
    }
}



//##################### CLIENTE #########################

let novoTexto = new Editor()
let txtEditor = new TextEditor(novoTexto)


let contador: boolean = true
while (contador == true) {
    console.log('\n\n##### LISTA DE COMPRAS #####')
    var menuOpcoes = ['VER LISTA', 'NOVO ITEM', 'APAGAR ITEM']
    var index: number = readlinesync.keyInSelect(menuOpcoes, 'Selecione sua opcao: \n\n')

    if (index == 0) {
        controler = 3
        let textoAtual = fs.readFileSync(arquivo, 'utf-8')
        console.log(textoAtual);

    } else if (index == 1) {
        let cont: boolean = true
        while (cont == true) {
            var controler: number = 1
            var escreverTexto: string = readlinesync.question("Escreva o texto desejado [EOF - para sair]: ")
            if (escreverTexto == 'EOF') {
                cont = false
                break

            } else {
                var numeroLinha: number = readlinesync.question("Em qual linha deseja inserir o texto? ")
                novoTexto.notifyObserverTextEditor()
            }
        }

    } else if (index == 2) {
        var controler: number = 2
        var deletaLinha: number = readlinesync.question('Qual linha deseja deletar? ')
        novoTexto.notifyObserverTextEditor()

    } else {
        process.exit
        contador = false
    }
}

