function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeBotoes = document.querySelectorAll9('.tecla');
let contador = 0

// Laço de repetição while
// Repete as intruções do codico ate a comdição ser falsa
 while (contador < listaDeBotoes.length) {
    listaDeBotoes[contador].onclick = tocaSomPom
    console.log("contador: " + contador);
    contador += 1;
}
