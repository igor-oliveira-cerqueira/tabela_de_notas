import { atualizarTabela, definirStatus } from './atualizarDados.js';
import { calcularMedia, pesquisar } from './opc.js'
import { preencher } from './preencher.js';

let linhas = document.querySelectorAll("tbody tr")
let input = document.querySelector('.entrada')

await preencher(linhas);

atualizarTabela(linhas, definirStatus, calcularMedia);


// objetos de input tem values, e objetos de tr tem textContent

input.addEventListener("input", function () {
    pesquisar(linhas, input);
});

