//pom
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto atualizando e voltando ao projeto (link de 2 pcs no git)
while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom')
    };
    
    contador = contador + 1;

    console.log(contador);
}

/*
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}


//alert('Olá mundo');
//document.querySelector('.tecla_pom');

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);
*/


