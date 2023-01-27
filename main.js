//pom
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSom;
    
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

*/

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);
