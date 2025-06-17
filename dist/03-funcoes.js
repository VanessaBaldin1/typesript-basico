"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `Olá ${nome}!`;
}
console.log(saudacao("ADA"));
(0, modulos_1.separador)();
function saudacaoCompleta(nome, anoLetivo = 2025, curso) {
    if (curso) {
        return `Olá ${nome}, você esta estudando ${curso}, em ${anoLetivo}`;
    }
    return `Olá ${nome}, o cantor em ${anoLetivo}`;
}
console.log(saudacaoCompleta("Valdemar", 2025, "historia"));
console.log(saudacaoCompleta("Paulo", 2025));
