import entradaDados from 'readline-sync';

let dia = entradaDados.questionInt("Digite o dia da semana(1 a 7): ");

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log("quarta");
        break;
    case 5:
        console.log("quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sétima");
        break;
    default:
        console.log("Esse dia não existe!")
        break;
}