//Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
//valor de imposto de renda a ser pago.

import rs from 'readline-sync';

for (let contador = 1; contador <= 10; contador++) {

    let nome = rs.question(`Informe o nome da ${contador}ª pessoa: `);
    let salario = rs.questionFloat(`Informe o salário de ${nome}: `);

    let imposto = 0;

    if (salario <= 2100) {
        imposto = 0;
    } else if (salario <= 2800) {
        imposto = salario * 0.075;
    } else if (salario <= 3750) {
        imposto = salario * 0.15;
    } else if (salario <= 4660) {
        imposto = salario * 0.225;
    } else {
        imposto = salario * 0.275;
    }
    console.log("Nome: "+nome);
    console.log("Imposto a ser pago: "+ imposto.toFixed(2));
}