import entradaDados from 'readline-sync';

let x = entradaDados.questionFloat("Digite o primeiro número: ")
let y = entradaDados.questionFloat("Digite o segundo número: ")
let operacao = entradaDados.question("Digite a operação (+-*/): ")

switch (operacao) {
    case "+":
        console.log( x + y)
        break;
    case "-":
        console.log(x - y);
        break;
    case "*":
        console.log(total = x * y);
        break;
    case "/":
        if (x == 0 ||y == 0){
            console.log("Impossivel dividir usando 0!");
        }else{
           console.log(x / y);
        };
        break;
    default:
        console.log("Operação inválida!")
        break;
}