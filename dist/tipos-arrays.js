"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function somarNumeros(numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}
let lista = [10, 20, 30];
console.log(somarNumeros(lista));
(0, modulos_1.separador)();
function imprimirNomes(nomes) {
    for (let nome of nomes) {
        console.log(nome);
    }
}
let nomes = ["Ana", "Bruno", "Carlos"];
imprimirNomes(nomes);
function dobrarValores(valores) {
    return valores.map(v => v * 2);
}
console.log(dobrarValores([1, 2, 3]));
(0, modulos_1.separador)();
function filtrarEDobrarPares(numeros) {
    return numeros
        .filter(n => n % 2 === 0)
        .map(n => n * 2);
}
let lista1 = [1, 2, 3, 4, 5, 6];
let resultado = filtrarEDobrarPares(lista1);
console.log(resultado);
(0, modulos_1.separador)();
function tribrarNumeros(numeros) {
    return numeros.filter(v => v % 3 === 0).map(v => v * 3);
}
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado2 = tribrarNumeros(valores);
console.log(resultado2);
