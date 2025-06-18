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
