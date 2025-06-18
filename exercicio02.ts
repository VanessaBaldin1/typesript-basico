//1) Crie uma interface para representar um produto com as propriedades nome, preço e garantia

interface Produto {
  nome: string;
  preco: number;
  garantia: boolean;
}

//2) Cria uma função que receba um objeto baseado na interface Produto e que mostre nome, preço e garantia. Obs: O objeto deve desestruturado como parâmetro individuais

const exibirDados: Produto = ({
  nome: string,
  preco: number,
  garantia,
}: Produto) => {
  console.log(`O ${nome}: ${preco} a garantia esta ${garantia}`);
};

const ProdutoA = {
  nome: "Geladeira",
  preco: 1500,
  garantia: true,
};

const ProdutoB = {
  nome: "TV",
  preco: 500,
  garantia: false,
};

exibirDados(ProdutoA);

//3)Use a função pelo menos 2x passando produtos diferentes
