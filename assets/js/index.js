// ********* REQUERIMIENTO 1 **********
// Se debe construir una página con una única imagen, 
// al hacerle click a la imagen se le debe agregar un 
// borde rojo de 2 pixeles, al hacerle click nuevamente 
// se le debe quitar el borde

const dog = document.querySelector('#dog')
let count = 0

addEventListener('click', () => {
    count++
    count % 2 != 0
        ? dog.style.outline = "3px solid #ef4444"
        : dog.style.outline = "none"
})


