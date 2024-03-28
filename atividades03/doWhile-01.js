import rs from 'readline-sync';

let aleatorio = 0;
let acerto = false;

aleatorio = Math.floor(Math.random() * 100) + 1;

//console.log(aleatorio);
do {
    let resposta = rs.questionInt("Digite um número (1 a 100): ")

    if (resposta > aleatorio) {
        console.log("Número múito grande!");

    } else if (resposta < aleatorio) {
        console.log("Número muito pequeno!");
        
    }else{
        console.log(`Acertou! O número era ${aleatorio}`);
        acerto = true;
    }
        
    
} while (acerto == false);