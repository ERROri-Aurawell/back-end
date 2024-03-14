import entradaDados from 'readline-sync';

let numero = entradaDados.questionInt("Digite um número: ");
let contador = 0;

while (contador <= 10) {
    let resultado = numero * contador;
    console.log(`${numero} X ${contador} = ${resultado}`);
    contador++
}
