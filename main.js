function tocaSom(selectorAudio) {
    const elemento = document.querySelector(selectorAudio);//procure o seletor
    //if(elemento != null
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');//procure TODOSos seletores

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string
    //quando clicar com o mouse
    tecla.onclick = function() {//função anonima(sem nome)
        tocaSom(idAudio);
    }
    //quando a tecla do teclado estiver precionado
    tecla.onkeydown = function(evento) {
        if (evento.code === "Space" || evento.code === "Enter") {//se a tecla precionada é do tipo "Space"
            tecla.classList.add('ativa');//ADICIONAR a classe 'ativa' na classe tecla
        }
    }
    //quando a tecla do teclado NÃO estiver precionado
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');//REMOVER a classe 'ativa' na classe tecla
    }
}
