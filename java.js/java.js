const inicioPrograma =  Number(prompt(`
        ======Bem-vindo======

O que deseja comprar ? 
=========================
[1] - banana
[2] - maça
[3] - manga
[4] - laranja
[5] - limão
    
 
    `))
    


const frutas = [ " banana", "maçã", "laranja", "limão" ]; 
switch(inicioPrograma){
    case 1:
        alert("voce escolheu banana")
}

    

for (let index = 0; index < frutas.length; index++) {
    document.write(frutas[index])
    
}