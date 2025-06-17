import { separador } from "./modulos";

export {};

//Exemplos de tipos básicos
let idade: number = 30;
let ativo: boolean = true;
let nome: string = "Álvaro";

//Nova atribuição
idade = 31;

console.log(`${nome} tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);

separador();

// Sobre o tipo any (qualquer)
// Tipo neutro, usado SOMENTE em situações de exceção em que não é possivel rapidamente identificar qual o tipo do valor (exemplo: refatoração complexa de um projeto com JS antigo e que deve migrar pra TS)
let qualquerCoisa: any = "Pode ser qualquer coisa";
qualquerCoisa = 10;
qualquerCoisa = true;

console.log(`Qualquer coisa: ${qualquerCoisa}`);

separador();

// Sobre Tipagem implícita ou por inferência

let exemplo1 = "Isso é uma string"; //TS infere que é string
let exemplo2 = 10; //TS infere que é number

//neste caso, não tem como TS inferir nada. Portanto, fica como any (EVITAR)
let exemplo3;

// variável sem valor mas já definida como tipo string
let exemplo4: string;
