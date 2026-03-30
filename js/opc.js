export function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media
}

export function definirStatus(media, linha) {
    let statusAluno = linha[5]
    if (media < 4) {
        statusAluno.textContent = "Reprovado"
    } else if ( media < 6){
        statusAluno.textContent = "Recuperação"
    } else {
        statusAluno.textContent = "Aprovado"
    }
}

