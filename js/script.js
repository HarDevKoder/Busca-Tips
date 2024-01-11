// --------------------------------------------------------------
// Importacion de Funciones
// --------------------------------------------------------------
import { referenciarElementosDom, desplegarTips } from "./libreria.js";

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

// Compruebo existencia de service worker (PWA)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
  .register("./sw.js")
  .then((reg) => console.log("Registro de SW exitoso", reg))
  .catch((err) => console.warn("Error al tratar de registrar el sw", err));
}


// Referencio elementos del DOM
referenciarElementosDom();

// Asigno logo a mostrar al cargar la pagina
contenedorLogoTech.src = "imagenes/programacion.svg";

// Selecciono Archivo para extraer Tips y manipulo sus datos
selectorCategorias.addEventListener("change", () => {
  archivoSeleccionado = selectorCategorias.value;
  desplegarTips(archivoSeleccionado);
});
