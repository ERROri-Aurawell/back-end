//03. Crie uma função que receba dois números como
//parâmetros e retorne a soma deles
import rs from 'readline-sync';

function declaracao() {

    function soma(num1, num2) {
        return num1 + num2
    }
    let num1 = rs.questionInt("Digite o primeiro numero: ");
    let num2 = rs.questionInt("Digite o segundo número: ")
    console.log(soma(num1, num2));
}

function expressao() {

    const somaExp = function(num1, num2) {
        return num1 + num2
    }
    let num1 = rs.questionInt("Digite o primeiro numero: ");
    let num2 = rs.questionInt("Digite o segundo número: ")
    console.log(somaExp(num1, num2));
}

function seta() {
    
    const somaSeta = (num1, num2) => {return num1 + num2}
    let num1 = rs.questionInt("Digite o primeiro numero: ");
    let num2 = rs.questionInt("Digite o segundo número: ")
    console.log(somaSeta(num1, num2));
}

