export {};

// Interfaces são usadas para definir a forma de um objeto, especializando os tipos de suas propriedades e métodos. São úteis para garantir que os objetos sigam uma estrutura específica
//Muito usando em orientação a objeto na programação

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string;
}

const usuarioA: Usuario = {
  nome: "Rita",
  idade: 30,
  ativo: true,
};

const usuarioB: Usuario = {
  nome: "Hugo",
  idade: 49,
  ativo: false,
  email: "hugo@gmail.com",
};

console.log(usuarioA);
console.log(usuarioB);
