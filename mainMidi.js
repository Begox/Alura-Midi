function tocaSom(seletorAudio) {
   const elemento =  document.querySelector(seletorAudio);

   if (elemento == null) {
    alert ('Elemento nao encontrado');
    console.log ('Elemento nao encontrado');
   }

   if (elemento != null) { // diferente de , se o elemento nao for igual ao null dar o play
       
        if(elemento.localName === 'audio') {
        elemento.play();
        }
    }
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
    
    tecla.onkeydown = function (evento) {

    //  console.log (evento.code)

        if (evento.code === 'Enter' || evento.code === 'Space' ) {
        tecla.classList.add('ativa');
        }
        
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


