"use strict";
function exibirCor(nome, cor) {
    if (cor) {
        return `A ${nome}, gosta da cor ${cor}`;
    }
    return `A ${nome} não escolheu nenhuma cor`;
}
console.log(exibirCor("Amanda", "cinza"));
console.log(exibirCor("Gilson"));
