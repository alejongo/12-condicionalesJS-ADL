// ********* REQUERIMIENTO 2 **********
// Se debe construir una página web que permita pedir 
// hasta 10 stickers de los 3 tipos disponibles. Para 
// eso deberá existir un input debajo de cada imagen donde 
// el usuario podrá ingresar un número. En caso de que la 
// suma de todos los stickers seleccionados sea menor o 
// igual 10 se indicará en un  párrafo nuevo la cantidad de 
// stickers llevados.

const cantSticker1 = document.querySelector('#sticker-1')
const cantSticker2 = document.querySelector('#sticker-2')
const cantSticker3 = document.querySelector('#sticker-3')
const totalStickersText = document.querySelector('#total-stickers-text')
const numberStickers = document.querySelector('#numberStickers')
const tooMuchStickersText = document.querySelector('#toomuch-stickers-text')

let countStickers = 0
numberStickers.innerHTML = countStickers


const totalStickersHandler = () => {
    let countStickers1 = parseInt(cantSticker1.value) || 0
    let countStickers2 = parseInt(cantSticker2.value) || 0
    let countStickers3 = parseInt(cantSticker3.value) || 0
    countStickers = countStickers1 + countStickers2 + countStickers3

    if (countStickers > 10) {
        tooMuchStickersText.removeAttribute('hidden')
        totalStickersText.setAttribute('hidden', "")
    } else {
        numberStickers.innerHTML = countStickers
        totalStickersText.removeAttribute('hidden')
        tooMuchStickersText.setAttribute('hidden', "")
    }
}

cantSticker1.addEventListener('input', totalStickersHandler)
cantSticker2.addEventListener('input', totalStickersHandler)
cantSticker3.addEventListener('input', totalStickersHandler)










