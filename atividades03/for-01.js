//01. Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci

let anterior = 0;
let sequencia = 1;

for (let index = 0; index < 20; index++) {
    let antecessor = anterior;
    console.log(`${index} - ${sequencia}`)
    anterior = sequencia;
    sequencia += antecessor;
}