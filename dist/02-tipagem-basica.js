"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
//Exemplos de tipos básicos
let idade = 30;
let ativo = true;
let nome = "Álvaro";
//Nova atribuição
idade = 31;
console.log(`${nome} tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);
(0, modulos_1.separador)();
// Sobre o tipo any (qualquer)
// Tipo neutro, usado SOMENTE em situações de exceção em que não é possivel rapidamente identificar qual o tipo do valor (exemplo: refatoração complexa de um projeto com JS antigo e que deve migrar pra TS)
let qualquerCoisa = "Pode ser qualquer coisa";
qualquerCoisa = 10;
qualquerCoisa = true;
console.log(`Qualquer coisa: ${qualquerCoisa}`);
(0, modulos_1.separador)();
// Sobre Tipagem implícita ou por inferência
let exemplo1 = "Isso é uma string"; //TS infere que é string
let exemplo2 = 10; //TS infere que é number
//neste caso, não tem como TS inferir nada. Portanto, fica como any (EVITAR)
let exemplo3;
// variável sem valor mas já definida como tipo string
let exemplo4;
