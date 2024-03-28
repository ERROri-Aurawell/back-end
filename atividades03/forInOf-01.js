//Escreva um programa que itere sobre as propriedades
//de um objeto e imprima suas chaves e valores.
let pessoa = {
    nome: "Paulo",
    idade: 25,
    cidade: "Rondônia"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}