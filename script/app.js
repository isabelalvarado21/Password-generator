const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

//
const $contraseniaGenerada = $(".contrasenia_generada")
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
const arrayLetras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arraySimbolos = ["!", "#", "$", "/", "&", "-", "_", ",", ".", "?", "%"]