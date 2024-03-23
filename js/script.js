// --------------------------------------------------------------
// Importacion de Funciones
// --------------------------------------------------------------
import {
  referenciarElementosDom,
  desplegarTips,
  verificarServiceWorker,
} from "./libreria.js";

// --------------------------------------------------------------
// Variables Globales
// --------------------------------------------------------------
let archivoSeleccionado = "./json/seleccionar.json";

// --------------------------------------------------------------
// PROGRAMA PRINCIPAL
// --------------------------------------------------------------

// Verifico en consola si el navegador soporta servuice worker
verificarServiceWorker();

// Referencio elementos del DOM
referenciarElementosDom();

// Asigno logo a mostrar al cargar la pagina
contenedorLogoTech.src = "imagenes/categorias/programacion.svg";

// Selecciono Archivo para extraer Tips y manipulo sus datos
selectorCategorias.addEventListener("change", () => {
  archivoSeleccionado = selectorCategorias.value;
  desplegarTips(archivoSeleccionado);
});
