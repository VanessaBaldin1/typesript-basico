import { separador } from "./modulos";

export {};

// Union Types

//União de tipos literais
let direcao: "esquerda" | "direita"; //valores possíveis
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

//Criando um novo tipo combinado outros tipos existentes
type NumeroOUTexto = number | string;
let exemploA: NumeroOUTexto = 2112;
let exemploB: NumeroOUTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

//Criando um novo type com tipos literais
type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "inativo";
let situacaoAluno3: Status = "pendente";
console.log(`O Aluno esta com a situação: ` + situacaoAluno3);

separador();

type DiasDaSemana =
  | "Domingo"
  | "Segunda-feira"
  | "Terça-feira"
  | "Quarta-feira";

const diaAtual: DiasDaSemana = "Quarta-feira";
console.log(diaAtual);

separador();

//Interseção de tipos
type Pessoa = { nome: string; idade: number };
type Funcionario = { salario: number };

const programadora: Pessoa & Funcionario = {
  nome: "Aurora",
  idade: 32,
  salario: 1000,
};

console.log(programadora);

separador();

//Criando um novo tipo a partir da interseção de outros tipos
type Colaborador = Pessoa & Funcionario;
const outroProgramador: Colaborador = {
  nome: "Silva",
  idade: 19,
  salario: 2000,
};
console.log(outroProgramador);
