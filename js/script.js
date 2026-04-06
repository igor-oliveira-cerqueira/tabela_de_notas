import {calcularMedia, definirStatus, pesquisar} from './opc.js'

let linhas = document.querySelectorAll("tbody tr")
let input = document.querySelector('.entrada')

for (let i = 0; i < linhas.length; i++) {

    let linha = linhas[i].children;
    let nota1 = Number(linha[1].textContent)
    let nota2 = Number(linha[2].textContent)
    let nota3 = Number(linha[3].textContent)

    let media = calcularMedia(nota1, nota2, nota3)

    linha[4].textContent = media.toFixed(2)
    definirStatus(media, linha)
}

// objetos de input tem values, e objetos de tr tem textContent

linhas.forEach(function (linha) {
    
    let filho = linha.children;
    let status = filho[5];

    if (status.textContent == "Reprovado") {
        status.classList.add("linha-reprovado");
    }

    if (status.textContent == "Recuperação") {
        status.classList.add("linha-recuperacao");
    }

    if (status.textContent == "Aprovado") {
        status.classList.add("linha-aprovado");
    }
});

input.addEventListener("input", function () {
    pesquisar(linhas, input);
});

