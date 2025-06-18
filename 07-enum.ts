export {};

//Enum são uma maneira de definir um conjunto de constantes nomeadas.Úteis para definir: status, categorias, grupos de valores relacionados etc.

enum DiasDaSemana {
  Domingo = "Domingo",
  Segunda = "Segunda-feira",
  Terça = "Terça-feira",
  Quarta = "Quarta-feira",
}

const diaAtual: DiasDaSemana = DiasDaSemana.Quarta;
console.log(diaAtual); //a contagem é igual de array posição 3
