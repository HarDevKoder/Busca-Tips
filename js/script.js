// --------------------------------------------------------------
// Importacion de Funciones
// --------------------------------------------------------------
import {
  referenciarElementosDom,
  desplegarTips,
} from "./libreria.js";

// --------------------------------------------------------------
// Origen de la carga de la pagina (inicial o retroceso)
// --------------------------------------------------------------
// origenCargaPagina();

// --------------------------------------------------------------
// Variables Globales
// --------------------------------------------------------------
let archivoSeleccionado = "json/Seleccionar.json";

// --------------------------------------------------------------
// PROGRAMA PRINCIPAL
// --------------------------------------------------------------
referenciarElementosDom();
contenedorLogoTech.src = "imagenes/programacion.svg";

// Selecciono Archivo para extraer Tips y manipulo sus datos
selectorCategorias.addEventListener("change", () => {
  archivoSeleccionado = selectorCategorias.value;
  desplegarTips(archivoSeleccionado);
});

