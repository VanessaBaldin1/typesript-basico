export {};

function saudacao(nome: string): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("ADA"));

//console.log(saudacao(10)); //erro, é passado number
//console.log(saudacao(true)); //erro, é passado boolean
