

const inicioPrograma = Number(prompt("Bem-vindo! O que deseja comprar?\n[1] - Banana\n[2] - Maçã\n[3] - Manga\n[4] - Laranja\n[5] - Limão"));

const frutas = ["Banana", "Maçã", "Manga", "Laranja", "Limão"];

switch (inicioPrograma) {
    case 1:
        alert("Você escolheu banana!");
        break;
    case 2:
        alert("Você escolheu maçã!");
        break;
    case 3:
        alert("Você escolheu manga!");
        break;
    case 4:
        alert("Você escolheu laranja!");
        break;
    case 5:
        alert("Você escolheu limão!");
        break;
    default:
        alert("Opção inválida!");
}