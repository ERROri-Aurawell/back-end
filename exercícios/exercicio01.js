//Crie a variável apartamento e atribua a ela um objeto literal com as
//seguintes propriedades:
//▪quartos = 2
//▪ tipo = “apartamento”
//▪ endereco = “Avenida Principal, 456 - Centro”
//▪andar: 7
//Em seguida, exiba no console a seguinte frase, utilizando todas as
//propriedades da variável casa: "Apartamento com 2 quartos, localizado no 7º
//andar da Av. Principal, 456 - Centro.".

let apartamento = {
    quarto: 2,
    tipo: "Apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7,

    local: function () {
        console.log(`${this.tipo} com ${this.quarto} quartos, localizado no ${this.andar}º andar da ${this.endereco}.`)
    }
};

apartamento.local();