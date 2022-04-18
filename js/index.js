console.log ('index funcionando')

let botonIngreso = document.getElementById('boton-ingreso');
let containerIngreso = document.querySelector('.container-ingreso')
let transitionEntrar = document.querySelector('.transition')
let body = document.querySelector('body')


function ingresoMenu() {
    console.log(containerIngreso);
    // transition.setAttribute("id","transitionAlEntrar");
  

    // let transitionId = document.getElementById('transitionAlEntrar')
    
botonIngreso.style.transform='scale(1.5)'
// transitionEntrar.style.trasition='all 2s'
setTimeout(() => {
    body.style.backgroundImage='url(https://i.pinimg.com/originals/15/7b/67/157b677b09602e35ec21c5c16a35eab4.jpg)'
  body.style.backgroundBlendMode=' background-blend-mode: luminosity;'
    containerIngreso.style.display='none';
}, 500);
   

}
addEventListener('click', ingresoMenu);

