
// ********* REQUERIMIENTO 3 **********

// Se debe construir una página con 3 select y opciones con 
// dígitos del 1 al 9, al hacer click a la opción ingresar 
// se debe verificar que el password sea 911 y en ese caso 
// mostrar debajo del botón ingresar, un párrafo con el contenido 
// "password 1 correcto", en caso de que el password sea 714 se debe mostrar 
// en el párrafo "password 2 es correcto", si ingresa otro 
// valor se debe mostrar "password incorrecto"

const value1 = document.querySelector('#password1')
const value2 = document.querySelector('#password2')
const value3 = document.querySelector('#password3')
const succes1 = document.querySelector('#pass1Check')
const succes2 = document.querySelector('#pass2Check')
const denied = document.querySelector('#wrongPass')

const btn = document.querySelector('#btn')


btn.addEventListener('click', () => {
    // Evalucación paswword
    if (Number(value1.value) === 9 && Number(value2.value) === 1 && Number(value3.value) === 1) {
        succes1.removeAttribute('hidden')
        succes2.setAttribute('hidden', '')
        denied.setAttribute('hidden', '')
    } else if (Number(value1.value) === 7 && Number(value2.value) === 1 && Number(value3.value) === 4) {
        succes2.removeAttribute('hidden')
        succes1.setAttribute('hidden', '')
        denied.setAttribute('hidden', '')
    } else {
        denied.removeAttribute('hidden')
        succes1.setAttribute('hidden', '')
        succes2.setAttribute('hidden', '')

    }

})
