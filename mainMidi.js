function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
   
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

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


