function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio)
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


