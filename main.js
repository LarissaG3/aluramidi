function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeBotoes = document.querySelector('.tecla_pom');
listaDeBotoes[0].onclick = tocaSomPom;
