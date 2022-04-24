let botonIngreso = document.getElementById('boton-ingreso');
let containerIngreso = document.querySelector('.container-ingreso')
let transitionEntrar = document.querySelector('.transition')
let body = document.querySelector('body')
let menu = document.querySelector('.menu')
let botonSelect= document.querySelectorAll('.boton-selec')

const mediaQuery = window.matchMedia('(max-width: 676px)')


function ingresoMenu(time) {
  
    time = 0
     
 botonIngreso.style.transform='scale(1.5)'
 
 setTimeout(() => {
     body.style.backgroundImage='url(https://i.pinimg.com/originals/6b/c3/81/6bc3818d99126bf8509990bcfc218f53.jpg)'
     body.style.backgroundSize='cover';
   body.style.filter='grayscale(100%)';
     containerIngreso.style.display='none';
    
 
     botonSelect.forEach(e => {
      // if (mediaQuery.matches) {console.log('Media Query Matched!')}
if (mediaQuery.matches) {
  e.style.width= '100%';
       e.style.height= '60px';
} else {
  e.style.width= '350px';
       e.style.height= '60px';
}
       e.style.transform= 'translate(0px)';
       
       e.style.backgroundColor= 'rgba(187, 204, 195, 0.7)';
       e.style.border= '5px rgba(41, 80, 59, 0.924) solid';
     e.style.transition='all 1s';
     });
     
 
 }, time);
    
 
 }

ingresoMenu()