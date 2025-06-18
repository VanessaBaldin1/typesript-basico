"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const usuario = ["João", 35, true];
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");
console.log(usuario[0]);
usuario[1] = 89;
console.log(usuario[1] + " anos.");
(0, modulos_1.separador)();
const produtoA = ["Camiseta", 29.99];
const produtoC = ["TV", 1000];
console.log(produtoA);
console.log(produtoC);
(0, modulos_1.separador)();
function verificarOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso!"];
    }
    return [500, "Erroinesperado no servidor"];
}
let resultadoDaOperacao = verificarOperacao(false);
console.log(resultadoDaOperacao);
function verificarOperacao1(sucesso) {
    return sucesso
        ? [200, "Operação realizada com sucesso!"]
        : [500, "Erro inesperado no servidor"];
}
let [, mensagem] = verificarOperacao1(false);
console.log(mensagem);
