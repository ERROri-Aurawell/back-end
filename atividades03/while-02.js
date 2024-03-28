import rs from 'readline-sync';

let qtAlunos = 0;
let turma = [];

qtAlunos = rs.questionInt("Digite a quantidade de alunos da turma: ");

while (qtAlunos > 0) {
    turma.push({ nome: rs.question("Nome aluno: "), pri: rs.questionFloat("Primeiro bim: "), seg: rs.questionFloat("Segundo bim: "), ter: rs.questionFloat("Terceiro bim: "), qua: rs.questionFloat("Quarto bim: ") });
    console.log("------------")
    qtAlunos--
}

let quantidade = turma.length;
console.log(quantidade + " Alunos");
console.log("-------------------");

let mediaTurma = 0;
let cont1 = 0;

while (cont1 < quantidade) {
    console.log(`Nome: ${turma[cont1].nome}`);
    console.log(`Primeiro bim: ${turma[cont1].pri}`);    
    console.log(`Segundo bim: ${turma[cont1].seg}`);    
    console.log(`Terceiro bim: ${turma[cont1].ter}`);    
    console.log(`Quarto bim: ${turma[cont1].qua}`);
    let media = (turma[cont1].pri +  turma[cont1].seg + turma[cont1].ter + turma[cont1].qua) / 4;
    console.log(`Média: ${media}`);
    mediaTurma = mediaTurma + media;
    console.log("------------------------");
    cont1 ++        
}
console.log(`Média turma = ${(mediaTurma/quantidade).toFixed(2)}`);
