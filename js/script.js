import {calcularMedia, definirStatus} from './opc.js'

let linhas = document.querySelectorAll("tbody tr")

for (let i = 0; i < linhas.length; i++) {

    let linha = linhas[i]

    let nota1 = Number(linha.querySelector(".nota_1").textContent)
    let nota2 = Number(linha.querySelector(".nota_2").textContent)
    let nota3 = Number(linha.querySelector(".nota_3").textContent)

    let media = calcularMedia(nota1, nota2, nota3)

    linha.querySelector(".media").textContent = media.toFixed(2)

    definirStatus(media, linha)
}