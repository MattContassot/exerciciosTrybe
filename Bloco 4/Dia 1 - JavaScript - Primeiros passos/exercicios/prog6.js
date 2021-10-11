let peca = "peao";
peca = peca.toLowerCase();

if (peca === "peao") {
    console.log("Anda pra frente e come na diagonal");
}

else if (peca === "torre") {
    console.log("Anda livremente na horizontal e vertical");
}

else if (peca === "cavalo") {
    console.log("Anda duas casas em qualquer direção e então mais uma casa num ângulo de 90º (ou uma casa em qualquer direção e mais uma casa num ângulo de 90º), como na forma da letra L");
}

else if (peca === "bispo") {
    console.log("Anda livremente nas diagonais, mas só pode permanecer na casa de cor inicial (branco ou preto)");
}

else if (peca === "rainha") {
    console.log("Anda livremente em qualquer distância e direção");
}

else if (peca === "rei") {
    console.log("Anda livremente em qualquer direção, porém apenas uma casa por rodada");
}

else {
    console.log("Esta peça não existe no xadrez");
}

console.log(peca);