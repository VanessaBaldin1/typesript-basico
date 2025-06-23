"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function exibirDados({ nome, preco, garantia }) {
    console.log(`O Produto:` + nome);
    console.log(`O Preço:` + preco);
    console.log(`A garantia:` + garantia);
}
const ProdutoA = {
    nome: "Geladeira",
    preco: 1500,
    garantia: "2 amos",
};
const ProdutoB = {
    nome: "TV",
    preco: 500,
    garantia: "1 ano",
};
(0, modulos_1.separador)();
exibirDados(ProdutoA);
(0, modulos_1.separador)();
exibirDados(ProdutoB);
