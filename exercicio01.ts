//1) Crie uma função chamada "exibirCor" que aceite:
// - nome da pessoa (obrigatório)
// - cor preferida da pessoa (opcional)

// Atenção: O parâmetro cor deve ser do tipo Cor e aceitar somente 5 cores

//2) Chame a função pelo menos 2x:
// Na primeira, passe o nome e uma cor (das possiveis)
// Na segunda, passe somente o nome

type Cores = "amarelo" | "verde" | "roxo" | "cinza" | "preto";

function exibirCor(nome: string, cor?: Cores): string {
  if (cor) {
    return `A ${nome}, gosta da cor ${cor}`;
  }
  return `A ${nome} não escolheu nenhuma cor`;
}

console.log(exibirCor("Amanda", "cinza"));
console.log(exibirCor("Gilson"));

//VERSÃO 2

//function exibirCor(nome: string, cor: Cor = "vermelho"): string {
// if (cor) {
//return `A ${nome}, gosta da cor ${cor}`;
// }
// return `A ${nome} não escolheu nenhuma cor`;
//}
