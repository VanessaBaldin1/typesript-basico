import { separador } from "./modulos";

export {};

//Tuplas
//É um tipo de array especial usada quando precisamos armazenar um conjunto fixo de elementos de tipos diferentes.
// Usamos quando precisamos da ordem de exebição dos dados do Array

//  SE USAR READONLY A TUPLA NÃO PODERÁ MODIFICAR (SOMENTE LEITURA)
//const usuario: readonly [string, number, boolean] = ["João", 35, true];

const usuario: [string, number, boolean] = ["João", 35, true];
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");
console.log(usuario[0]);

//Para atualizar o valor da tupla (desde que não seja readonly)
usuario[1] = 89;
console.log(usuario[1] + " anos.");

separador();

//Criando uma tupla como tipo
type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
//const produtoB:Produto = [100, "Calça"]; erro, pois esta fora do padrão da tupla

const produtoC: Produto = ["TV", 1000];
console.log(produtoA);
console.log(produtoC);

separador();

//Usando tupla no retorno de função
//function verificarOperacao(sucesso: boolean): [number, string] {
//if (sucesso) {
//return [200, "Operação realizada com sucesso!"];
//}
//return [500, "Erroinesperado no servidor"];
//}

///let resultadoDaOperacao = verificarOperacao(true);

//console.log(resultadoDaOperacao);

//mini exercicio
//Extraia a tupla do retorno da função para um novo type
type mensagem = [number, string];

function verificarOperacao(sucesso: boolean): mensagem {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erroinesperado no servidor"];
}

let resultadoDaOperacao = verificarOperacao(false);

console.log(resultadoDaOperacao);

//Desestruturação o resultadoDaOperacao e mostra somente a mensagem no console

function verificarOperacao1(sucesso: boolean): mensagem {
  return sucesso
    ? [200, "Operação realizada com sucesso!"]
    : [500, "Erro inesperado no servidor"];
}

let [, mensagem] = verificarOperacao1(false);

console.log(mensagem);
