import rs from 'readline-sync';

function declaracao() {

    function porcento(num1, num2) {
        let porcento = (num1/100) * num2
        return num1 - porcento
    }

    let num1 = rs.questionInt("Digite o primeiro numero: ");
    let num2 = rs.questionInt("Digite a porecentagem (sem %): ");
    console.log(porcento(num1, num2));
}

function expressao() {

    const porcentoExp = function(num1, num2) {
        let porcento = (num1/100) * num2
        return num1 - porcento
    }

    let num1 = rs.questionInt("Digite o primeiro numero: ");
    let num2 = rs.questionInt("Digite a porecentagem (sem %): ");
    console.log(porcentoExp(num1, num2));
}

function seta() {
    
    const porcentoSeta = (num1, num2) => { 
    let porcento = (num1/100) * num2
    return num1 - porcento}

    let num1 = rs.questionInt("Digite o primeiro numero: ");
    let num2 = rs.questionInt("Digite a porecentagem (sem %): ");
    console.log(porcentoSeta(num1, num2));
}
