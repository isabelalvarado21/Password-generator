const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

//
const $contraseniaGenerada = $(".contrasenia_generada")
const $texto = $("#textoCopiado")
const $btnCopiar = $(".boton_copiar")
const $btnRecargar = $(".boton_recargar")

const $longitudMaxima = $("#longitud_maxima")
const $longitudMedia = $("#longitud_media")
const $longitudMinima = $("#longitud_minima")

const $reglaDeLetras = $("#regla_letras")
const $reglaDeNumeros = $("#regla_numeros")
const $reglaDeTodosCaracteres = $("#regla_todos")

const $caracteresMayusculas = $("#caracteres_mayusculas")
const $caracteresMinisculas = $("#caracteres_minisculas")
const $caracteresNumericos = $("#caracteres_numericos")
const $caracteresDeSimbolos = $("#caracteres_simbolos")

//
const letrasMinisculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const letrasMayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]  
const letrasMayusculasYMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numeros = [0 ,  1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
const simbolos = ["!", "#", "$", "/", "&", "-", "_", ",", ".", "?", "%"]
const multiples = [letrasMayusculas, letrasMinisculas, numeros, simbolos]

//
const reglaSeleccionada = () => {
    if($caracteresMayusculas.checked && $caracteresMinisculas.checked && $reglaDeLetras.checked){
        return letrasMayusculasYMinusculas
    }
    else if ($reglaDeLetras.checked && $caracteresMayusculas.checked) {
        return letrasMayusculas  
    }
    else if($reglaDeLetras.checked && $caracteresMinisculas.checked){
        return letrasMinisculas
    }
    else if ($reglaDeNumeros.checked){
        return numeros
    }
    else if ($reglaDeTodosCaracteres.checked){
    arrayMultiple = []; 
    for(const multiple of multiples){
        for (const caracter of multiple){
            arrayMultiple.push(caracter)
        }
    }
    return arrayMultiple
    }
}

const longitudSeleccionada = () =>{
    const arregloVacio = [];
    if ($longitudMaxima.checked) {
        for (let index = 0; index < 12; index++) {
            let letra = Math.floor(Math.random() * reglaSeleccionada().length)
            arregloVacio.push(reglaSeleccionada()[letra])
            $contraseniaGenerada.innerText = arregloVacio.join("");
            
        }
        
    } else if ($longitudMedia.checked){
        for (let index = 0; index < 9; index++) {
            let letra = Math.floor(Math.random() * reglaSeleccionada().length)
            arregloVacio.push(reglaSeleccionada()[letra])
            $contraseniaGenerada.innerText = arregloVacio.join("");
            
        }
    } else if ($longitudMinima.checked){
        for (let index = 0; index < 6; index++) {
            let letra = Math.floor(Math.random() * reglaSeleccionada().length)
            arregloVacio.push(reglaSeleccionada()[letra])
            $contraseniaGenerada.innerText = arregloVacio.join("");
            
        }
    }
}

// 
$btnRecargar.addEventListener("click", longitudSeleccionada)

$btnCopiar.addEventListener("click", () => {
    let textToCopy = $texto.innerText
    navigator.clipboard.writeText(textToCopy)
})










