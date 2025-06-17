import { separador } from "./modulos";

export {};

//arrays com números
function somarNumeros(numeros: number[]): number {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}

// Usando a função
let lista = [10, 20, 30];
console.log(somarNumeros(lista)); 

separador();

//arrays para string
function imprimirNomes(nomes: string[]): void {
  for (let nome of nomes) {
    console.log(nome);
  }
}

let nomes = ["Ana", "Bruno", "Carlos"];
imprimirNomes(nomes);

//Usando métodos de arrays dentro função
function dobrarValores(valores: number[]): number[] {
  return valores.map(v => v * 2);
}

console.log(dobrarValores([1, 2, 3])); 

separador();

//Exemplo função com array filter e map
function filtrarEDobrarPares(numeros: number[]): number[] {
  return numeros
    .filter(n => n % 2 === 0)  // Passo 1: filtra pares
    .map(n => n * 2);          // Passo 2: dobra cada par
}

// Usando a função
let lista1 = [1, 2, 3, 4, 5, 6];
let resultado = filtrarEDobrarPares(lista1);

console.log(resultado); // Resultado: [4, 8, 12]

separador();

function tribrarNumeros(numeros: number[]): number[] {
    return numeros.filter( v => v % 3 ===0 ).map( v => v * 3)
}

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado2 = tribrarNumeros(valores)

console.log(resultado2);
