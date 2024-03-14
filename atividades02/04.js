import entradaDados from 'readline-sync';

let salario = entradaDados.questionFloat("Informe seu salário: ");

let categoria = entradaDados.question("Digite sua categoria(A,B,C,D): ");

switch (categoria) {
    case "A":
        console.log(salario = salario * 1.05);
        break;
    case "B":
        console.log(salario = salario * 1.1);
        break;
    case "C":
        console.log(salario = salario * 1.15);
        break;
    case "D":
        console.log(salario = salario * 1.2);
        break;
    default:
        break;
}