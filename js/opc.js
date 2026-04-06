export function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media
}

export function definirStatus(media, linha) {
    let statusAluno = linha[5]
    if (media < 4) {
        statusAluno.textContent = "Reprovado"
    } else if (media < 6) {
        statusAluno.textContent = "Recuperação"
    } else {
        statusAluno.textContent = "Aprovado"
    }
}

function esconderLinha(linha, textoInput) {
    
    let encontrado = false
    let celulas = Array.from(linha.children);

    celulas.forEach(function (celula) {
        let textoCelula = celula.textContent.toLowerCase();
        if (textoCelula.includes(textoInput)) {
            encontrado = true;
        };
    });
    
    linha.style.display = encontrado ? 'table-row' : 'none';
}

export function pesquisar(linhas, input) {
    
    let textoInput = input.value.toLowerCase();
    
    linhas.forEach(function (linha) {
        esconderLinha(linha, textoInput)
    });
}

