//Desenvolva uma função que calcule a
//área de um círculo. A função deve receber o
//raio como parâmetro e retornar a área
//calculada.
import rs from 'readline-sync';

function declaracao() {

    function area(raio) {
        let area = 3.14159 * (raio * raio)
        return area
    }

    let raio = rs.questionInt("Digite o raio: ");
    console.log(area(raio));
}

function expressao() {

    const areaExp = function(num1, num2) {
        let area = 3.14159 * (raio * raio)
        return area
    }

    let raio = rs.questionInt("Digite o raio: ");
    console.log(areaExp(raio));
}

function seta() {
    
    const areaSeta = (num1, num2) => { 
        let area = 3.14159 * (raio * raio)
        return area
    }

    let raio = rs.questionInt("Digite o raio: ");
    console.log(areaSeta(raio));
}

//declaracao()
//expressao()
seta()