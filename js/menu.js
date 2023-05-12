// Jorge Penagos - 12/5/2023
// Funcionalidad del menu
const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

// Cambios de clase
hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
// Clicks para cerrar el menu
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})