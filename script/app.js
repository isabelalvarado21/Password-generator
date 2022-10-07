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
const $caracteresMinusculas = $("#caracteres_minusculas")
const $caracteresNumericos = $("#caracteres_numericos")
const $caracteresDeSimbolos = $("#caracteres_simbolos")

//
const letrasMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const letrasMayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const letrasMayusculasYMinusculas = [ letrasMayusculas, letrasMinusculas];
const numeros = [0 ,  1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
const simbolos = ["!", "#", "$", "/", "&", "-", "_", ",", ".", "?", "%"];
const caracteres = [];

//
const reglaSeleccionada = () => {
    if($caracteresMayusculas.checked && $caracteresMinusculas.checked && $reglaDeLetras.checked){
        letrasCompleto = [];
        for (const letras of letrasMayusculasYMinusculas){
            for (const letra of letras){
            letrasCompleto.push(letra)  
        }
        }return letrasCompleto  
    }
    else if($reglaDeLetras.checked && $caracteresMayusculas.checked){
        return letrasMayusculas  
    }
    else if($reglaDeLetras.checked && $caracteresMinusculas.checked){
        return letrasMinusculas
    }
    else if($reglaDeNumeros.checked && $caracteresNumericos.checked){
        return numeros
    }
    else if ($reglaDeTodosCaracteres.checked){
        arrayMultiple = []; 
        for(const multiple of caracteres){
            for (const caracter of multiple){
            arrayMultiple.push(caracter)
        }
        }return arrayMultiple
    } 
}

const caracterMayuscula = () => {
    if($caracteresMayusculas.checked){
        caracteres.push(letrasMayusculas)
    }else{
       caracteres.splice(caracteres.indexOf(letrasMayusculas),1) 
    } 
}
const caracterMinuscula = () => {
    if($caracteresMinusculas.checked){   
       caracteres.push(letrasMinusculas)  
    }else{
      caracteres.splice(caracteres.indexOf(letrasMinusculas), 1) 
    }
}
const caracterNumero = () => {
    if($caracteresNumericos.checked){
        caracteres.push(numeros)
    }else{
       caracteres.splice(caracteres.indexOf(numeros), 1)
    }
}
const caracterSimbolo = () => {
    if($caracteresDeSimbolos.checked){
        caracteres.push(simbolos)
    }else{
       caracteres.splice(caracteres.indexOf(simbolos), 1)
    }
}

const longitudSeleccionada = () => {
    const arregloVacio = [];
    if ($longitudMaxima.checked) {
        for (let i = 0; i < $longitudMaxima.value; i++) {
            let letra = Math.floor(Math.random() * reglaSeleccionada().length)
            arregloVacio.push(reglaSeleccionada()[letra])
            $contraseniaGenerada.innerText = arregloVacio.join("");   
        }
    } else if ($longitudMedia.checked){
        for (let i = 0; i < $longitudMedia.value; i++) {
            let letra = Math.floor(Math.random() * reglaSeleccionada().length)
            arregloVacio.push(reglaSeleccionada()[letra])
            $contraseniaGenerada.innerText = arregloVacio.join(""); 
        }
    } else if ($longitudMinima.checked){
        for (let i = 0; i < $longitudMinima.value; i++) {
            let letra = Math.floor(Math.random() * reglaSeleccionada().length)
            arregloVacio.push(reglaSeleccionada()[letra])
            $contraseniaGenerada.innerText = arregloVacio.join("");  
        }
    }
}

// 
$caracteresMayusculas.addEventListener("click", caracterMayuscula)
$caracteresMinusculas.addEventListener("click", caracterMinuscula)
$caracteresNumericos.addEventListener("click", caracterNumero)
$caracteresDeSimbolos.addEventListener("click", caracterSimbolo)

$btnRecargar.addEventListener("click", longitudSeleccionada)
$btnCopiar.addEventListener("click", () => {
    let textToCopy = $texto.innerText
    navigator.clipboard.writeText(textToCopy)
})

$reglaDeNumeros.addEventListener("change", () => {
    if ($reglaDeNumeros.checked){
        $caracteresNumericos.disabled = false;
        $caracteresMayusculas.disabled = true;
        $caracteresMinusculas.disabled = true;
        $caracteresDeSimbolos.disabled = true;
}})
$reglaDeLetras.addEventListener("change", () => {
    if ($reglaDeLetras.checked){
        $caracteresMayusculas.disabled = false;
        $caracteresMinusculas.disabled = false;
        $caracteresDeSimbolos.disabled = true;
        $caracteresNumericos.disabled = true;
}})
$reglaDeTodosCaracteres.addEventListener("change", () => {
    if ($reglaDeTodosCaracteres.checked){
        $caracteresMayusculas.disabled = false;
        $caracteresMinusculas.disabled = false;
        $caracteresDeSimbolos.disabled = false;
        $caracteresNumericos.disabled = false;
}})












