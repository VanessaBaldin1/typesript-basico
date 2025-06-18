import { separador } from "./modulos";

export {};

//Sintaxe 1
const bandas: Array<string> = ["Metallica", "Slayer", "Iron Maiden"];
//bandas.push(10)// erro
bandas.push("Nirvana");
console.log(bandas);

//Sintaxe 2
const artistas: string[] = ["Jon Oliva", "Sting", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);

separador();

//Arrays com tipos mistos ou combinados
const pessoas: (string | number)[] = ["Luis Miguel", 56, "Renata", 28];
console.log(pessoas);

separador();

//Matrizes
const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][1]);
