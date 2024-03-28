//02. Crie uma função que receba um número como
//parâmetro e verifique se ele é par ou ímpar. Retorne uma string.
import rs from 'readline-sync';

function declaracao() {

    function imparPar(entrada) {
        if (entrada % 2 == 0) {
            return "Par"
        } else {
            return "Impar"
        }
    }
    let numero = rs.questionInt("Digite um número: ");
    console.log(imparPar(numero));
}

function expressao() {

    const imparParExp = function (entrada) {
        if (entrada % 2 == 0) {
            return "Par"
        } else {
            return "Impar"
        }
    }
    let numero = rs.questionInt("Digite um número: ");
    console.log(imparParExp(numero));
}

function seta() {

    const imparParSeta = (entrada) => {
        if (entrada % 2 == 0) {
            return "Par"
        } else {
            return "Impar"
        }
    }
    let numero = rs.questionInt("Digite um número: ");
    console.log(imparParSeta(numero));
}
