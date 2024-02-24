let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados=[];
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText= texto;
    return;
}
function verificarIntento () {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    //el usuario acerto
    if(numeroDelUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if(numeroDelUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor en ');
    }else {                                                   
        asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
 }
    return;
}
    

  function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
    
  }

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*10+1);
    // si el numero generado esta incluido en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 a 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();
