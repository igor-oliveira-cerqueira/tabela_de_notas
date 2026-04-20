export function definirStatus(media, celulas) {
    let statusAluno = celulas[5]
    if (media < 4) {
        statusAluno.textContent = "Reprovado"
        statusAluno.classList.add("linha-reprovado");
    } else if (media < 6) {
        statusAluno.textContent = "Recuperação"
        statusAluno.classList.add("linha-recuperacao");
    } else {
        statusAluno.textContent = "Aprovado"
        statusAluno.classList.add("linha-aprovado");
        
    }
}

export function atualizarTabela(linhas, definirStatus, calcularMedia) {
    linhas.forEach(function (linha) {
        let celulas = Array.from(linha.children);
        let nota1 = Number(celulas[1].textContent)
        let nota2 = Number(celulas[2].textContent)
        let nota3 = Number(celulas[3].textContent)
        let media = calcularMedia(nota1, nota2, nota3)
        celulas[4].textContent = media.toFixed(2)
        definirStatus(media, celulas)
    });
}