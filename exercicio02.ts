//1) Crie uma interface para representar um produto com as propriedades nome, preço e garantia

interface Produto {
  nome: string;
  preco: number;
  garantia: string;
}

//2) Cria uma função que receba um objeto baseado na interface Produto e que mostre nome, preço e garantia. Obs: O objeto deve desestruturado como parâmetro individuais

const exibirDados = ({ nome, preco, garantia }: Produto) => {
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

//3)Use a função pelo menos 2x passando produtos diferentes
