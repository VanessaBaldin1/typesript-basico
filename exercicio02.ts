export {};

//1) Crie uma interface para representar um produto com as propriedades nome, preço e garantia

import { separador } from "./modulos";

interface Produto {
  nome: string;
  preco: number;
  garantia: string;
}

//2) Cria uma função que receba um objeto baseado na interface Produto e que mostre nome, preço e garantia. Obs: O objeto deve desestruturado como parâmetro individuais

function exibirDados({ nome, preco, garantia }: Produto): void {
  console.log(`O Produto:` + nome);
  console.log(`O Preço:` + preco);
  console.log(`A garantia:` + garantia);
}

const ProdutoA: Produto = {
  nome: "Geladeira",
  preco: 1500,
  garantia: "2 amos",
};

const ProdutoB: Produto = {
  nome: "TV",
  preco: 500,
  garantia: "1 ano",
};

separador();

exibirDados(ProdutoA);

separador();

exibirDados(ProdutoB);

//3)Use a função pelo menos 2x passando produtos diferentes
