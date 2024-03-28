import rs from 'readline-sync';

function declaracao() {

    function maiusculo(entrada) {
        return entrada.toUpperCase();
    }
    let texto = rs.question("Digite um texto: ");

    console.log(maiusculo(texto));
}

function expressao() {

    const caixaAlta = function(entrada) {
        return entrada.toUpperCase();
    }
    let texto = rs.question("Digite um texto: ");
    console.log(caixaAlta(texto));
}

function seta() {
    
    const letraGrande = (texto) => {return texto.toUpperCase()}
    let texto = rs.question("Digite um texto: ");
    console.log(letraGrande(texto));
}
