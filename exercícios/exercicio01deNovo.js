//1. Imagine que você está desenvolvendo um sistema para gerenciar produtos em
//um armazém. Crie uma variável chamada produtoEmbalado que execute as
//seguintes operações:
//Atribua um objeto literal à variável com as seguintes propriedades:
//▪ nome: "Laptop HP"
//▪ categoria: "Eletrônicos"
//▪ peso: 1.5
//▪ preco: 3500.00
//Exiba no console uma frase que utilize todas as propriedades do objeto, como o
//exemplo abaixo: "O produto Laptop HP, da categoria Eletrônicos, pesando 1.5 kg, está
//à venda por R$ 3500.00.


let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00,

    produto: function () {
        console.log(`O produto ${this.nome}, da categoria ${this.categoria}, pesando ${this.peso}, está à venda por ${this.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`);
    }
}

produtoEmbalado.produto();