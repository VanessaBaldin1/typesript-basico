"use strict";
const exibirDados = ({ nome, preco, garantia }) => {
    console.log(`O ${nome}: ${preco} a garantia esta ${garantia}`);
};
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
exibirDados(ProdutoA);
exibirDados(ProdutoB);
