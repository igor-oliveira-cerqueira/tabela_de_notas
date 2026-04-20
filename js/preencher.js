async function preencher(linhas) {
    let promise = await fetch("http://127.0.0.1:5501/bd/bd.json");
    let alunos = await promise.json();

    Array.from(linhas).forEach(function (linha, index) {
        let celulas = linha.children;

        celulas[0].textContent = alunos[index].nome;
        celulas[1].textContent = alunos[index].nota1;
        celulas[2].textContent = alunos[index].nota2;
        celulas[3].textContent = alunos[index].nota3;

    });
}

export {preencher};