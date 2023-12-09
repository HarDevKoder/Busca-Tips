// --------------------------------------------------------------
// Importacion de Funciones
// --------------------------------------------------------------
import {
  referenciarElementosDom,
  cargarArchivoCategoria,
  extraerDatoCompletoJson,
  origenCargaPagina,
  customAlert,
  mostrarListadoTipsModal,
  desplegarTips,
} from "./libreria.js";

// --------------------------------------------------------------
// Origen de la carga de la pagina (inicial o retroceso)
// --------------------------------------------------------------
origenCargaPagina();

// --------------------------------------------------------------
// Variables Globales
// --------------------------------------------------------------
let archivoSeleccionado = "json/Seleccionar.json";

// --------------------------------------------------------------
// PROGRAMA PRINCIPAL
// --------------------------------------------------------------

// Referencio Elementos del DOM
referenciarElementosDom();

// Cargo el logo para la opción por defecto (seleccionar archivo)
contenedorLogoTech.src = "imagenes/programacion.svg";

// Selecciono Archivo para extraer Tips y manipulo sus datos
selectorCategorias.addEventListener("change", () => {
  listaResultados.innerText = " ";
  archivoSeleccionado = cargarArchivoCategoria();
  desplegarTips(archivoSeleccionado);
});
