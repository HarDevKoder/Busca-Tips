// referencia a los objetos de DOM
const selectorCategorias = document.getElementById('selectorCategorias');
const btnBuscar = document.getElementById('btnBuscar');
const contenedorResultados = document.getElementById('contenedorResultados');

// Importacion de Funciones de la libreria
import { validarDatoInput  } from "./libreria.js";


// Variables globales\


// PROGRAMA PRINCIPAL

// Valido la entrada de datos (solo texto, espacio y backspace)
txtDatoBuscado.addEventListener('keydown', validarDatoInput);

