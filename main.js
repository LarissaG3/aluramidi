function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeBotoes = document.querySelector('.tecla_pom').onclick= tocaSomPom

let contador = 0

 while (contador <9) {
    listaDeBotoes[contador] .onclick = tocaSomPom
    contador = contador + 1;
 }
 
