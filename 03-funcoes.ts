import { separador } from "./modulos";

export {};

function saudacao(nome: string): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("ADA"));

//console.log(saudacao(10)); //erro, é passado number
//console.log(saudacao(true)); //erro, é passado boolean

separador();

//Uso de parâmetro opcional com a flag ? após o nome do parâmetro
function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `Olá ${nome}, você esta estudando ${curso}, em ${anoLetivo}`;
  }
  return `Olá ${nome}, o cantor em ${anoLetivo}`;
}

//na chamada

console.log(saudacaoCompleta("Valdemar", 2025, "historia"));
console.log(saudacaoCompleta("Paulo", 2025));
