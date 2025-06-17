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
